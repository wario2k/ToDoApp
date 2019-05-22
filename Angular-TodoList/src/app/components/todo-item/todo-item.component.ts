import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
//input property to enable adding todo components 
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todo : true,
      'is-complete' :this.todo.completed
    }

    return classes;
  }

  onToggle(todo)
  {
    //UI update
    todo.completed = !todo.completed;
    //server update
    this.todoService.toggleCompleted(todo);

  }

  onDelete(todo)
  {
    this.deleteTodo.emit(todo);
  }
  

}
