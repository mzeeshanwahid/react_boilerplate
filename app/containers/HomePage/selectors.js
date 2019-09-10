import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.home || initialState;

const makeSelectTodos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.todos,
  );

export { makeSelectTodos };
