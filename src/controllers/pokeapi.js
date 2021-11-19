const express = require("express")
const fetch = require('node-fetch');

let datapoke

const pokeapiController = {
    
    getAll: async (req, res) => {
        try {
            let idParams = req.params.id
            fetch(`https://pokeapi.co/api/v2/pokemon/${idParams}`)
            .then(response => response.json())
            .then(data => datapoke = data)
            res.status(200).json({datapoke})
            return 
        }catch (error) {
            console.log(err);
            res.sendStatus(500);
            return;        
        }
    }
}

module.exports = pokeapiController;