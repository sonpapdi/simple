const express = require('express')
const router = express.Router()
const con = require('../config/db')

router.post('/', (req, res) => {
    const { first_name, last_name } = req.body;
    console.log(req.body)
    if (!first_name || !last_name) {
        res.status(400).send({ msg: "please enter all inputs" })
    }
    con.query("INSERT INTO page(first_name,last_name) VALUES(?,?)", [first_name, last_name], (error, rows) => {

        if (error) console.log(error);
        else {
            console.log(rows);
            res.send(rows)

        }
    })
})

module.exports = router;