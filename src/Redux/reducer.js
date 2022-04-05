import { ADD_TASK, DEC_COUNTER, INC_COUNTER } from "./actions";

export const initState = {
  counter: 0,
  todo: []
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + payload
      };
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - payload
      };
    case ADD_TASK:
      console.log(state);

      return {
        ...state,
        todo: [...state.todo, payload]
      };
    default:
      return state;
  }
};
