const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title : String,
    isCompleted : Boolean
})

module.exports = mongoose.model('ToDo',todoSchema);
    // date : Date
