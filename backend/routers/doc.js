const express = require('express')
const router = express.Router()
const con = require('../config/db')
router.post("/CreateEmp", (req, res) => {

    const Name = req.body.Name;
    const Department = req.body.Department;
    const Age = req.body.Age;
    const City = req.body.City;
    const Country = req.body.Country;
    const Gender = req.body.Gender;

    con.query(
        "INSERT INTO doc (Name,Department,Age,City,Country,Gender) VALUES (?,?,?,?,?,?)",
        [Name, Department, Age, City, Country, Gender],
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
    con.query("SELECT * FROM doc", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


router.get("/:id", (req, res) => {
    const id = req.params.id;

    con.query("SELECT * FROM doc WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


router.put("/", (req, res) => {
    const id = req.body.id;
    // const id = req.params.id;
    const Name = req.body.Name;
    const Department = req.body.Department;
    const Age = req.body.Age;
    const City = req.body.City;
    const Country = req.body.Country;
    const Gender = req.body.Gender;
    con.query(
        "UPDATE doc SET Name = ?,Department = ?,Age = ?,City = ?,Country = ?,Gender = ? WHERE id = ?",
        [Name, Department, Age, City, Country, Gender, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("update successfull");
            }
        }
    );
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM doc WHERE id = ?", id, (err, result) => {
        if (!err)
            res.send('Learner Record deleted successfully.');
        else
            console.log(err);
    });
});
module.exports = router;