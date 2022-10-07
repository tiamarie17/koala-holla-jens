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

koalaRouter.put('/:id', (req, res)=>{
    let koalaId=req.params.id;
    console.log('in /koala put with id of:', koalaId);
    // data time
    const sqlText=`
    UPDATE "koallas"
    SET "ready_to_transfer" = NOT "ready_to_transfer"
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
koalaRouter.delete('/:id', (req, res)=>{
    let koalaId=req.params.id;
    console.log('in /koala put with id of:', koalaId);
    // data time
    const sqlText=`
    DELETE FROM "koallas"
    WHERE "id" = $1
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



module.exports = koalaRouter;