import { Injectable } from '@angular/core';
import {Init} from './init-todos';
import {Todo} from './todos/todos.model';

@Injectable()
export class TodoService extends Init {

  constructor() { 
    super();
    console.log("TodoService initialized..");
    this.load();
  }

  getTodos(){
    var todos:Todo[] = JSON.parse(localStorage.getItem(this.key));
    return todos;
  }
}
