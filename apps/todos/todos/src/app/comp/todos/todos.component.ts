import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  title: String;
  description: String;
  todos$: Observable<Todo[]>;

  constructor(private todosService: TodosService, private router: Router) {
    this.todos$ = todosService.entities$;
  }

  testModel() {
    console.log('update');
    return '12';
  }

  getTodos() {
    this.todosService.getAll();
  }

  deleteTodo(todoId: number) {
    this.todosService.delete(todoId);
  }

  updateTodo(todo: Todo) {
    todo.active = !todo.active;
    this.todosService.update(todo);
  }

  ngOnInit() {
    this.getTodos();
  }

  editTodo(id: number) {
    this.router.navigate(['todopage', id]);
  }
  src;
}
