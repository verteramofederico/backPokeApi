var express = require('express');
var router = express.Router();

const pokeapi = require("../controllers/pokeapi")

// routes
router.get("/api/:id", pokeapi.getAll);

/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = router;
