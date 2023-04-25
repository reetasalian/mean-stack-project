require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const cors = require("cors");
const mongoose = require('mongoose');
const { MONGODB_URL }= process.env;
// const url = 'mongodb://localhost:27017/todo';
const {PORT} = process.env
var ToDo = require('./models/todo.model')


const app = express();

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // connect to mongoDB database

const con = mongoose.connection

con.on('open', () => {
    console.log('DB is connected......');
})

// app.use(bodyParser.urlencoded(({'extended' : false})));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.use(morgan('dev'));

app.get("/",(req,res) => {{
    // res.json({'message' : 'Welcome to TODO List App'});
    res.send("<h1>To Do App</h1>");
}})

app.post("/create", async (req,res) => {
    const todo = new ToDo({
        title : req.body.title,
        isCompleted : req.body.isCompleted
    })
    try{
        const todoTest = await todo.save();
        res.json(todoTest);
    } catch(err){
        res.send('Create To Do Error -',err)
    }
})


app.listen(PORT, ()=>{
    console.log(`Server is running at port : ${PORT}`);
})

