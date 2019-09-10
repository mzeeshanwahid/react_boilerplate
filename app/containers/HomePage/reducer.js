import produce from 'immer';
import { GET_API_DATA } from './constants';

export const initialState = {
  todos: [],
};

const apiCallReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_API_DATA:
        draft.todos = [...action.payload];
        break;
      default:
        break;
    }
  });

export default apiCallReducer;
