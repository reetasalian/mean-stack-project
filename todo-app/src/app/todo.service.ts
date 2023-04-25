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

  getToDos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl+'/')
    .pipe(map(res  => {
      return res;
    }))
/*     .map(res  => {
      return res["data"].docs as Todo[];
    }) */
  }
}
