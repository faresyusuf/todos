import { Component } from '@angular/core';
import {Todo} from './todos/todos.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = "My First App";
  constructor(){
  
  }
}
