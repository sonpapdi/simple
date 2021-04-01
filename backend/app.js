// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     database: "employeeSystem",
// });

// app.post("/create", (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const country = req.body.country;
//     const position = req.body.position;
//     const wage = req.body.wage;

//     db.query(
//         "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//         [name, age, country, position, wage],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get("/employees", (req, res) => {
//     db.query("SELECT * FROM employees", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.put("/update", (req, res) => {
//     const id = req.body.id;
//     const wage = req.body.wage;
//     db.query(
//         "UPDATE employees SET wage = ? WHERE id = ?",
//         [wage, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.listen(5000, () => {
//     console.log("Yey, your server is running on port 3001");
// });



// // log in user//
const express = require("express");
const app = express();
const login = require('./routers/login')
const leadmaster = require('./routers/leadmaster')
const employees = require('./routers/employees')
const Productsmaster = require('./routers/Productsmaster')
const doc = require('./routers/doc')
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/login', login);
app.use('/leadmaster', leadmaster);
app.use('/employees', employees);
app.use('/Productsmaster', Productsmaster);
app.use('/doc', doc);
app.listen(8001, () => {

    console.log("Yey, your server is running on port 3000")
});
