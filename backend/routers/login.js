const express = require('express')
const router = express.Router()
const con = require('../config/db')

router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query(
        "INSERT INTO login (email,password) VALUES (?,?)",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});
router.get("/", (req, res) => {
    // const email = req.body.email;
    // const password = req.body.password;
    con.query("SELECT * FROM login", (err, result) => {
        // con.query("SELECT id,name,age FROM employees where name=? and age=?", [email, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


module.exports = router;