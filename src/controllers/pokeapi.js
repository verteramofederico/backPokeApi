const express = require("express")
const fetch = require('node-fetch');

let datapoke = ""

const pokeapiController = {
    
    getAll: async (req, res) => {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1119`)
            .then(response => response.json())
            .then(data => {datapoke = data
            res.status(200).json({datapoke})
            })        
        }catch (error) {
            console.log(error);
            res.sendStatus(500);  
        }},
        
    getById: async (req, res) => {
        let idParams = req.params.id
        if (idParams !== null && idParams !== undefined) {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${idParams}`)
            .then(response => response.json())
            .then(data => {datapoke = data
            res.status(200).json({datapoke})
            })
            
        }catch (error) {
            console.log(error);
            res.sendStatus(500);  
        }}
        if (idParams === null || idParams === undefined) {
            res.status(500).send({ error: 'You must enter a valid id' })
        }
    }
}

module.exports = pokeapiController;