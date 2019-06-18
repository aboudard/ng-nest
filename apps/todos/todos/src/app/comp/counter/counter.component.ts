import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'myorg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private todosService: TodosService) {
    this.counter$ = this.todosService.count$;
  }

  ngOnInit() {}
}
