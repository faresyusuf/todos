import { Component, OnInit, Input } from '@angular/core';
import {Todo} from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  //template: '<p>todos work!</p>',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  
  constructor() {
    
  }

  ngOnInit() {
    this.todos = [
      new Todo("drop yusha","dorp yusha to school"),
      new Todo("pick yusha","pick yusha from school")
    ];
  }

  addToDo(title:HTMLInputElement, desc:HTMLInputElement):boolean{
    //console.log(`adding todo in list with title: ${title.value} and description: ${desc.value}`);
    this.todos.push(new Todo(title.value, desc.value));
    return false;
  }

  deleteTodo(todo){
    console.log( `deleting  ${todo.title}`);
    for(var i=0;i<this.todos.length; i++){
      if(this.todos[i] == todo){
        this.todos.splice(i,1);
      }
    }
  }

}
