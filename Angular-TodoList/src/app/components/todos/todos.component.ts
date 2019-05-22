import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //object defined in models 
  todos : Todo[]; 
  constructor(private todoService:TodoService) { }

  ngOnInit() 
  {
    //initalize basic todo objects
    this.todoService.getTodos().subscribe(todos=> {
     this.todos = todos;
    })
  }
  deleteTodo(todo:Todo)
  {

   console.log("Here");
    this.todos = this.todos.filter(t=>t .id != todo.id); //return all todos that doesn't have that id
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo)
  {
    console.log("adding todo");
    console.log(todo.title);
    //make post request to the server via the todo service and then add it to the UI
    this.todoService.addTodo(todo).subscribe(todo => 
                                      this.todos.push(todo));
  }



}
