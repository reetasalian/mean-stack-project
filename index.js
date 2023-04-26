require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MONGODB_URL }= process.env;
const {PORT} = process.env

const app = express();

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // connect to mongoDB database

const con = mongoose.connection

con.on('open', () => {
    console.log('DB is connected......');
})

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });

app.get("/",(req,res) => {{
    res.send("<h1>Welcome To Do App</h1>");
}})

const todoRouter = require('./routes/todo.route')
app.use('/todos', todoRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running at port : ${PORT}`);
})

