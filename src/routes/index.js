var express = require('express');
var router = express.Router();

const pokeapi = require("../controllers/pokeapi")

router.get("/api/:id", pokeapi.getById);
router.get("/api", pokeapi.getAll);

module.exports = router;
