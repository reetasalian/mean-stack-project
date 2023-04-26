import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import Todo from './todo.model';
// import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todosList!: Todo[];
  public newTodo: Todo = new Todo();
  editTodos: Todo[] = [];

  constructor(private todoService: TodoService){
  }

  ngOnInit(){
    this.todoService.getToDos()
      .subscribe(todos => {
        this.todosList = todos;
        console.log('All Todo -',this.todosList);
      })
  }

  create() {
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        this.todosList.push(res.data)
        this.newTodo = new Todo();
      })
  }

  editTodo(todo: Todo) {
    console.log('edit todo -',todo);
    if(this.todosList.includes(todo)){
      if(!this.editTodos.includes(todo)){
        this.editTodos.push(todo);
      }else {
        this.editTodos.splice(this.editTodos.indexOf(todo), 1)
        this.todoService.editTodo(todo)
        .subscribe({
          next(res) {
            console.log('ToDo updated successfully ', res);
          },
          error(err) {
            console.log('Error occurred while updating todo: ', err);
          }
        });
      }
    }
  }
  doneTodo(todo:Todo){}

  submitTodo(event:any, todo:Todo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo._id)
    .subscribe((res : any) => {
      console.log('ToDo deleted successfully',res);
      this.todosList.splice(this.todosList.indexOf(todo), 1);
    })
  }
}
