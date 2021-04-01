const express = require('express')
const router = express.Router()
const con = require('../config/db')

router.post('/', (req, res) => {
    const { Name, Email_Id, Password, Conform_password, Mobile_no, Branch_Id, Company_Id } = req.body;
    console.log(req.body)
    // if (!first_name || !last_name) {
    //     res.status(400).send({ msg: "please enter all inputs" })
    // }
    con.query("INSERT INTO employee(Name,Email_Id,Password,Conform_password,Mobile_no,Branch_Id,Company_Id) VALUES(?,?,?,?,?,?,?)", [Name, Email_Id, Password, Conform_password, Mobile_no, Branch_Id, Company_Id], (error, rows) => {
        // con.query("INSERT INTO employee(Name,Email_Id,Password,Conform_password,Mobile_no,Branch_Id,Company_Id) VALUES(?,?,?,?,?,?,?)",
        // [Name, Email_Id, Password, Conform_password, Mobile_no, Branch_Id, Company_Id], (error, rows) => {

        if (error) console.log(error);
        else {

            console.log(rows);
            res.send(rows)
        }
    })
})


router.get('/get', (req, res) => {
    con.query("select * from employee", (err, result) => {

        if (err) {
            res.send({ msg: "get data error" })
        }
        else
            res.send(result)
        console.log(result)
    })

})
module.exports = router;