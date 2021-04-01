const express = require('express')
const router = express.Router()
const con = require('../config/db')
router.post("/", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    con.query(
        "INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",
        [name, age, country, position, wage],
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
    con.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
router.put("/", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    con.query(
        "UPDATE employees SET wage = ? WHERE id = ?",
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
module.exports = router;