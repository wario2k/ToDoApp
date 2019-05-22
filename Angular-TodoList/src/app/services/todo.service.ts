import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/Common/http'
import { Observable } from 'rxjs';

const httpOptions = 
{
  headers : new HttpHeaders(
    {
      'Content-Type':'application-json'
    }
  )
}
//allows us to inject it into a constructor
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl :string =  'http://jsonplaceholder.typicode.com/todos';
  limitedUrl : string = this.todosUrl + '?_limit=5';
  todos:Todo[];
  constructor(private http : HttpClient) { }

  getTodos():Observable<Todo[]>
  {
    //returns get request from the url
    return this.http.get<Todo[]>(this.limitedUrl); 
  }

  //toggle state of item
  toggleCompleted(todo: Todo):Observable<any>
  {
    const url =`${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  }

  //update delete request to server
  deleteTodo(todo:Todo):Observable<Todo>
  {
    const url =`${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }
  //will make a post request to update current list of todos
  addTodo(todo:Todo):Observable<Todo>
  {
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }
}
