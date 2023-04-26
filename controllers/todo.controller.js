var TodoService = require('../services/todos.service')

exports.getTodos = async function(req, res, next){
    try{
        var todos = await TodoService.getTodos(req, res)
        return res.status(200).json({status: 200, data: todos, message: "Succesfully Todos Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createTodo = async function(req, res, next){
    var todo = {
        title: req.body.title,
        status: req.body.status,
    }
    try{
        var createdTodo = await TodoService.createTodo(todo)
        return res.status(201).json({status: 201, data: createdTodo, message: "Succesfully Created ToDo"})
    } catch(e){
        return res.status(400).json({status: 400, message: "Todo Creation was Unsuccesfull"})
    }
}

exports.updateTodo = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        status: req.body.status !== "" ? req.body.status : null,
        // date: req.body.date ? req.body.date : null
    }

    try{
        var updatedTodo = await TodoService.updateTodo(todo)
        return res.status(200).json({status: 200, data: updatedTodo, message: "Succesfully Updated Todo"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeTodo = async function(req, res, next){
    console.log("Delete request params",req.params)
    var id = req.params.id;

    try{
        var deleted = await TodoService.deleteTodo(id);
        console.log("deleted",deleted);
        return res.status(204).json({status:204, data :deleted, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}