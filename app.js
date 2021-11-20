var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')

var indexRouter = require('./src/routes/index');

var app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', indexRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(express.static("public"))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
