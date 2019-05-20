import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //object defined in models 
  todos : Todo[]; 
  constructor() { }

  ngOnInit() {
    //initalize basic todo objects
    this.todos = [
      {
        id : 1,
        title : "todo one",
        completed : false
      },
      {
        id : 2,
        title : "todo 2",
        completed : true
      }
      ,
      {
        id : 3,
        title : "todo 3",
        completed : false
      }
    ]
  }

}
