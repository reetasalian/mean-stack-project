const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title : String,
    isCompleted : Boolean,
    date : Date
})

module.exports = mongoose.model('ToDo',todoSchema);