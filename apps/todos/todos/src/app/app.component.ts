import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos-todos';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todo').subscribe(t => (this.todos = t));
  }

  addTodo() {
    const tmpTodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      title: 'brand new todo',
      description: 'i want to ride my bicycle',
      active: true
    };
    this.http.post('/api/todo', tmpTodo).subscribe(() => {
      this.fetch();
    });
  }
}
