const express = require('express')
const router = express.Router()
const con = require('../config/db')

router.post("/", (req, res) => {


    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    con.query(
        "INSERT INTO Productsmaster (firstName,lastName,email,password) VALUES (?,?,?,?)",
        [firstName, lastName, email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});
router.get("/Productsmaster", (req, res) => {
    con.query("SELECT * FROM Productsmaster", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


module.exports = router;