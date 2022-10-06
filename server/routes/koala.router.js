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


// DELETE

module.exports = koalaRouter;