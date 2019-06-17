import { increment } from './actions/counter.actions';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from './reducers/index';
import { Todo } from '@myorg/data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from './selectors/counter.selectors';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nx NestJS Angular';
  todos: Todo[] = [];
  count$: Observable<number>;
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;
  counter$: Observable<number>;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private todosService: TodosService
    ) {
    // this.fetch();
    this.todos$ = todosService.entities$;
    this.loading$ = todosService.loading$;
    this.counter$ = this.todosService.count$;
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
    this.todosService.add(tmpTodo).subscribe(res => {
      console.log('added ' + res.title);
    })
    /* this.http.post('/api/todo', tmpTodo).subscribe(() => {
      this.fetch();
    }); */
  }

  ngOnInit(): void {
    this.store.dispatch(increment());
    this.count$ = this.store.pipe(
      select(selectCount)
    );
    this.todosService.getAll();
  }
}
