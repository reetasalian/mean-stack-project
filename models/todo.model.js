const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title : String,
    status : String
})

module.exports = mongoose.model('ToDo',todoSchema);
