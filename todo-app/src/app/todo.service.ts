import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import Todo from './todo.model';
// import { Todo } from './todo';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = 'https://reetasalian-literate-train-456xx7gx75v3pxx-4000.preview.app.github.dev/todos';

  constructor(private http : HttpClient) { }

  getToDos(): Observable<any>{
    return this.http.get<any>(this.todoUrl+'/')
    .pipe(map(res  => {
      return res.data;
    }))
  }

  createTodo(todo: Todo): Observable<any>{
    console.log('create todo req body -',todo);
    return this.http.post(`${this.todoUrl}/create`, todo);
  }

  editTodo(todo:Todo): Observable<any>{
    return this.http.put(`${this.todoUrl}/`, todo);
  }

  deleteTodo(id:string):any{
    let deleteUrl = `${this.todoUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }
}
