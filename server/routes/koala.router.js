const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');


// DB CONNECTION


// GET


// POST

koalaRouter.post('/', (req, res)=>{
    console.log('req.body', req.body);

    const sqlText = 
    `
        INSERT INTO "koallas"
            ("name", "age", "gender", "ready_to_transfer", "notes")
        VALUES
            ($1, $2, $3, $4, $5); --placeholders for sqlParams
    `;
        console.log(sqlText);

    const sqlParams = [
        req.body.name, 
        req.body.age, 
        req.body.gender,
        req.body.ready_to_transfer,
        req.body.notes,
    ];

        pool.query(sqlText, sqlParams)
            .then((dbRes)=>{
                console.log('in POST router .then');
                res.sendStatus(201);
            })
            .catch((err)=>{
                console.log('POST router failed', err);
                res.sendStatus(500);
            });

});


// PUT


// DELETE

module.exports = koalaRouter;