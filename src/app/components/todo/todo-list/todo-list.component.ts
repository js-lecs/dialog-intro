import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { Observable } from 'rxjs/Observable';
import { TodoNewService } from '../../../services/todo-new.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Array<any> = [];
  todoObservable$: Observable<any>;
  sampleNumber = 200.123456;
  searchText = "";
  constructor(private todoService: TodoService,
    private todoNewService: TodoNewService) {
    this.getTodosFromService();
    this.todoObservable$ = todoNewService.getTodos();
  }

  ngOnInit() {
  }

  getTodosFromService() {
    this.todoNewService.getTodos()
      .subscribe((data) => {
        console.log("get todo success", data);
        this.todos = data.reverse();
      }, (err) => {
        console.log("get todo error", err);
      })
  }
  del(id) {
    // call the service and send a delete request
    this.todoNewService.deleteTodo(id).subscribe((data) => {
      console.log('successfully deleted todo', data);
      // reload the list
      this.getTodosFromService();
    }, err => console.log('error todo delete', err));

  }

  edit(todoObj) {
    console.log('new object', todoObj);
    // call the service 
    this.todoNewService.editTodo(todoObj)
      .subscribe(data => {
        console.log('edit success', data)
        alert('successfully edited')
      }, err => console.log('error todo update', err));

  }

  onKeyUp() {
    alert("key pressed");
  }
}
