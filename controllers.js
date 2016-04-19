toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory){
  this.todos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false }];

  this.addToDo = function(task) {
    this.todos.push(new ToDoFactory(task));
  }

  this.deleteToDo = function(todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}]);

toDoApp.factory('ToDoFactory', function(){
  var Todo = function(task) {
    this.text = task;
    this.completed = false;
  }

  return Todo
})
