import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todosList!: Todo[];
  constructor(private todoService: TodoService){
  }

  ngOnInit(){
    this.todoService.getToDos()
      .subscribe(todos => {
        this.todosList = todos;
        console.log('Todo Data -',this.todosList);
      })
  }
}
