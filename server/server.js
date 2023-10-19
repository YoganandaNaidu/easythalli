import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();
const app_host = process.env.APP_HOST
const app_port = process.env.APP_PORT

const db_host = process.env.DB_HOST
const db_port = process.env.DB_PORT
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_name
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

app.listen(app_port, ()=> {
    console.log(`hurray, I am here waiting, listenning @port :${app_port}.....to Respond.`);
})