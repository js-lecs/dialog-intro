import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Array<any> = [];
  todoObservable$: Observable<any>;

  constructor(private todoService: TodoService) {
    this.getTodos();

    // observableTodo
    this.todoObservable$ = this.todoService.getTodos();
  }

  ngOnInit() {
  }

  getTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todoList = data;
      console.log(data);
    }, (err) => {
      console.log('error handler called', err);
    });
  }

}
