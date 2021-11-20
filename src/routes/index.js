var express = require('express');
var router = express.Router();

const pokeapi = require("../controllers/pokeapi")

router.get("/:id", pokeapi.getById);
router.get("/", pokeapi.getAll);

module.exports = router;
