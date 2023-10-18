import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT
const host = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"node_react_1",
})

app.get('/', (req, res) => {
    const sql = "SELECT * from shop";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message:"Error while fetching the data"});
        return res.json(result);
    })
})

app.post('/shopcreate', (req, res) => {
    const sql = "INSERT into shop (`name`, `contactname`, `contactnumber`, `remarks`, `isActive`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.contactname,
        req.body.contactnumber,
        req.body.remarks,
        req.body.isActive,
    ]
    db.query(sql, [values], (err, result)=> {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * from shop where id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result)=> {
        if(err) return res.json({Message:"Error while fetching the data"});
        return res.json(result);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE shop SET `name` = ?, `contactname` = ?, `contactnumber` = ?, `remarks` = ?, `isActive` = ? where id = ?";
    const id = req.params.id;

    db.query(sql, [req.body.name, req.body.contactname, req.body.contactnumber, req.body.remarks, req.body.isActive, id], (err, result)=> {
        if(err) return res.json({Message:"Error while updating the data"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM shop where id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result)=> {
        if(err) return res.json({Message:"Error while deleting the data"});
        return res.json(result);
    })
})

app.listen(port, ()=> {
    console.log(`hurray, I am here waiting, listenning @port :${port}..... to Respond.`);
})