import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
//input property to enable adding todo components 
  @Input() todo: Todo;
  
  constructor() { }

  ngOnInit() {
  }

}
