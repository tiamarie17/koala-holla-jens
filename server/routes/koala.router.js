const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');


// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    pool.query(`
    SELECT * FROM "koallas" ORDER BY "id";
`)
    .then((dbRes) => {
    res.send(dbRes.rows);
})
    .catch((err) => {
    console.log('GET /koalas failed', err);
    res.sendStatus(500);
});
});

// POST


// PUT

koalaRouter.put('/:id', (req, res)=>{
    let koalaId=req.params.id;
    console.log('in /koala put with id of:', koalaId);
    // data time
    const sqlText=`
    UPDATE "koallas"
    SET "ready_to_transfer" = 'Y'
    WHERE "id" = $1;
    `
    const sqlParams=[koalaId]

    pool.query(sqlText, sqlParams)
    .then((dbRes)=>{
      res.sendStatus(201);
    })
    .catch(err=>{
      console.log('in /koalas put error', err);
      res.sendStatus(500);
    });
})

// DELETE

module.exports = koalaRouter;