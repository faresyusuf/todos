import {Todo} from './todos/todos.model';
export class Init{
    key:string = "todos";
    load(){
        if(localStorage.getItem(this.key) === null || localStorage.getItem(this.key) == undefined )
        {
            console.log(`no todos found, initializing`);
            var todos:Todo[] = [
                new Todo("drop yusha","dorp yusha to school"),
                new Todo("pick yusha","pick yusha from school")
            ];
            localStorage.setItem(this.key, JSON.stringify( todos) );
            return;
        }
        else{
            console.log(`found todos...`);
        }
    }

    addTodo(todo:Todo){
        var todos:Todo[] = JSON.parse( localStorage.getItem(this.key));
        todos.push(todo);
        localStorage.setItem(this.key, JSON.stringify(todos));
        return todos;
    }

    deleteTodo(todo:Todo){
        console.log( `deleting  ${todo.title}`);
        var todos:Todo[] = JSON.parse( localStorage.getItem(this.key));
        for(var i=0;i<todos.length; i++){
            if(todos[i] == todo){
                todos.splice(i,1);
            }
        }
        return todos;
    }
}