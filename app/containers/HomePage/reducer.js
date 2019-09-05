import produce from "immer";
import { GET_API_DATA } from "./constants";

export const initialState = {
    todos: []
}

const apiCallReducer = (state = initialState, action) => produce(state, (draft => {
    switch (action.type) {
        case GET_API_DATA:
            console.log("Inside Reducer", action.payload);
            draft.todos = action.payload;            
    }
    console.log("State from Reducer", initialState.todos);
}));

export default apiCallReducer;