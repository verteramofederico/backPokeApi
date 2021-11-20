const express = require("express")
const fetch = require('node-fetch');

let datapoke = ""

const pokeapiController = {
    
    getAll: async (req, res) => {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
            .then(response => response.json())
            .then(data => {datapoke = data
            res.status(200).json({datapoke})
            })        
        }catch (error) {
            console.log(error);
            res.sendStatus(500) 
        }},

    getById: async (req, res) => {
        let idParams = req.params.id
        if (idParams !== null && idParams !== undefined && idParams <= 898) {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${idParams}`)
            .then(response => response.json())
            .then(data => {datapoke = data
            res.status(200).json({datapoke})
            })
            
        }catch (error) {
            console.log(error);
            res.sendStatus(500) 
        }}
        if (idParams !== null && idParams !== undefined && idParams > 898 && idParams <= 1118 ) {
            try {
                // hay un salto de 9103 en los id de Pokemon. En la siguiente linea se salva.
                idToCall = parseInt(idParams) + 9102
                fetch(`https://pokeapi.co/api/v2/pokemon/${idToCall}`)
                .then(response => response.json())
                .then(data => {datapoke = data
                res.status(200).json({datapoke})
                })
                
            }catch (error) {
                console.log(error);
                res.sendStatus(500) 
            }}
        if (idParams === null || idParams === undefined || idParams > 1118) {
            res.status(500).send({ error: 'You must enter a valid id betwen 1 and 1118' })
        }
    }
}

module.exports = pokeapiController;