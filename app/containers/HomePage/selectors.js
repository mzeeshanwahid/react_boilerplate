import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectGlobal = state => state.todos || initialState;

const makeSelectTodos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState
  );

export {
  selectGlobal,
  makeSelectTodos
};
