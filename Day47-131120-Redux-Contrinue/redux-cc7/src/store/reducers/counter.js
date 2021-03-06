import { ADD, DECREMENT, INCREMENT, RESET, SUBTRACT } from "../action";

const initialState = {
  counter: 0,
  resultList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

export default reducer;