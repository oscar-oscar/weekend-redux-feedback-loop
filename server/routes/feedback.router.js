const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET ROUTE 
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "feedback"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

//POST ROUTE

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let { feeling, understanding, support, comments } = req.body;
    pool.query(queryText, [feeling, understanding, support, comments])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});


// PUT ROUTE


// DELETE ROUTE 



module.exports = router;