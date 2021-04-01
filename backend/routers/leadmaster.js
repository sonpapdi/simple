const express = require('express')
const router = express.Router()
const con = require('../config/db')

router.post("/", (req, res) => {
    const companyname = req.body.companyname;
    const gstno = req.body.gstno;
    const panno = req.body.panno;
    const emailid = req.body.emailid;
    const website = req.body.website;
    const phoneno = req.body.phoneno;
    const faxno = req.body.faxno;
    const contactperson = req.body.contactperson;
    const contactpersondesignation = req.body.contactpersondesignation;
    const statename = req.body.statename;
    const cityname = req.body.cityname;
    const invoiceaddress = req.body.invoiceaddress;
    const notes = req.body.notes;
    const invoicesource = req.body.invoicesource;
    const assignto = req.body.assignto;

    con.query("INSERT INTO leadmaster (companyname,gstno,panno,emailid,website,phoneno,faxno,contactperson,contactpersondesignation,statename,cityname,invoiceaddress,notes,invoicesource,assignto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [companyname, gstno, panno, emailid, website, phoneno, faxno, contactperson, contactpersondesignation, statename, cityname, invoiceaddress, notes, invoicesource, assignto], (err, result) => {

            if (err) console.log(err);
            else {
                res.send("Values Inserted");
            }
        }
    );
});


router.get("/:id", (req, res) => {
    const id = req.body.id;
    con.query("SELECT * FROM leadmaster WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

router.get("/", (req, res) => {
    con.query("SELECT * FROM leadmaster", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

router.put("/:id", (req, res) => {
    const id = req.body.id;
    const companyname = req.body.companyname;
    const gstno = req.body.gstno;
    const panno = req.body.panno;
    const emailid = req.body.emailid;
    const website = req.body.website;
    const phoneno = req.body.phoneno;
    const faxno = req.body.faxno;
    const contactperson = req.body.contactperson;
    const contactpersondesignation = req.body.contactpersondesignation;
    const statename = req.body.statename;
    const cityname = req.body.cityname;
    const invoiceaddress = req.body.invoiceaddress;
    const notes = req.body.notes;
    const invoicesource = req.body.invoicesource;
    const assignto = req.body.assignto;

    con.query(
        "UPDATE leadmaster SET companyname = ?, gstno = ?, panno = ?, emailid = ?, website = ?, phoneno = ?, faxno = ?, contactperson = ?, contactpersondesignation = ?, statename = ?, cityname = ?, invoiceaddress = ?, notes = ?, invoicesource = ?, assignto = ? WHERE id = ?",
        [companyname, gstno, panno, emailid, website, phoneno, faxno, contactperson, contactpersondesignation, statename, cityname, invoiceaddress, notes, invoicesource, assignto, id],
        (err, result) => {
            if (!err)
                res.send('Learner Details Updated Successfully');
            else
                console.log(err);
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM leadmaster WHERE id = ?", id, (err, result) => {
        if (!err)
            res.send('Learner Record deleted successfully.');
        else
            console.log(err);
    });
});

module.exports = router;


// const id = req.body.id;
//     const gstno = req.body.gstno;
//     con.query(
//         "UPDATE employees SET gstno = ? WHERE id = ?",
//         [gstno, id],
//         (err, result) => {
//             // if (err) {
//             //     console.log(err);
//             // } else {
//             //     res.send(result);
//             // }
//             if (!err)
//                 res.send('Learner Details Updated Successfully');
//             else
//                 console.log(err);
//         }
//     );