const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/todo'

const app = express();

mongoose.connect(url) // connect to mongoDB database

const con = mongoose.connection

con.on('open', () => {
    console.log('DB is connected......');
})

// app.use(bodyParser.urlencoded(({'extended' : false})));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.use(morgan('dev'));

app.get("/",(req,res) => {{
    res.json({'message' : 'Welcome to TODO List App'});
}})


app.listen(9000, ()=>{
    console.log('Express Server Started.....');
})

