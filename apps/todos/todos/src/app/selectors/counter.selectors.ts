import { AppState } from './../reducers/index';
import { createSelector } from '@ngrx/store';
import * as fromCounter from '../reducers/counter.reducer';

export const selectState = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectState,
  (state: fromCounter.CounterState) => state.count
);
