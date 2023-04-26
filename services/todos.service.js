var ToDo = require('../models/todo.model')

exports.getTodos = async function(req, res){
    try {
        const todos = await ToDo.find();
        // res.json(todos);
        return todos;
    } catch(err){
        res.send('Get All To Do Error -',err)
    }
}

exports.createTodo = async function(todo){
    var newTodo = new ToDo({
        title: todo.title,
        status: todo.status,
    })

    try {
        var savedTodo = await newTodo.save()
        return savedTodo;
    } catch(e) {
        throw Error("Error while Creating Todo")
    }
}

exports.updateTodo = async function(todo){
    var id = todo.id

    try{
        var oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    if(!oldTodo){
        return false;
    }

    console.log(oldTodo)

    oldTodo.title = todo.title
    oldTodo.status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deleteTodo = async function(id){
    
    try{
        var deleted = await ToDo.deleteOne({_id: id});
        return deleted;
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}