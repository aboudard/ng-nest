import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => ({ ...state, count: state.count + 2 }))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
