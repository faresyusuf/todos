import { Component, OnInit, Input } from '@angular/core';
import {Todo} from './todos.model';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  //template: '<p>todos work!</p>',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  
  constructor(private _todoService:TodoService) {
    
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addToDo(title:string, desc:string):boolean{
    //console.log(`adding todo in list with title: ${title.value} and description: ${desc.value}`);
    //this.todos.push(new Todo(title.value, desc.value));
    this._todoService.addTodo(new Todo(title, desc));
    return false;
  }

  deleteTodo(todo){
    console.log( `deleting  ${todo.title}`);
    this._todoService.deleteTodo(todo);
  }

}
