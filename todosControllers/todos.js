var db = require('./../db/db');

class TodosController {
  getAllTodos(req,res) {
    res.status(200).send({
      success : true,
      message : "Todos retrieved successfully",
      todos : db
    });
}
  createTodo(req,res) {
    if(!req.body.title || !req.body.description){
      return res.status(400).send({
        success : false,
        message : 'Information missing'
      });
    }
    const todo = {
      id : db.todos.length + 1,
      title : req.body.title,
      description : req.body.description
    }
    db.todos = db.todos.concat(todo);
    return res.status(200).send({
      success : true,
      message : "Todo added successfully",
      todo
    });
  }

getTodo(req , res) {
  var id = parseInt(req.params.id);
  let flag = false;
  db.todos.forEach(function (todo){
      if(todo.id === id){
        flag = true;
        return res.status(200).send({
          success : false,
          message : todo
        });
      }
  });
  if(flag != true){
  res.status(400).send({
    success : false,
    message : "Todo not found"
  });}
}

deleteTodo(req,res) {
  const id = parseInt(req.params.id);
  let flag = false;
  db.todos.forEach(function(todo){
    if(todo.id === id){
      flag = true;
      delete db.todos[id];
      return res.status(200).send({
        success : true,
        message : "Todo deleted success"
      });
    }
  });
  if (flag != true){
  res.status(400).send('Failed');}
}

updateTodo(req , res){
    const id = parseInt(req.params.id);
    let todoFound;
    let itemIndex;
    let flag = false;
    db.todos.map((todo , index) => {
      console.log(todo);
      if(todo.id === id){
        flag = true;
        todoFound = todo;
        itemIndex = index;
      }
    });
      if(flag != true){
        return req.status(400).send('Failed updating');
      }
      else if(!req.body.title || !req.body.description){
        return res.status(400).send("Information incomplete");
      }
      else{
      const updatedTodo = {
        id : todoFound.id,
        title : req.body.title,
        description : req.body.description
      }
      db.todos.splice(itemIndex , 1 , updatedTodo);
      return res.status(201).send({
        success :  true,
        message : "Todo updated successfully"
      });
}
}

}

const todoController = new TodosController();
module.exports = {todoController};
