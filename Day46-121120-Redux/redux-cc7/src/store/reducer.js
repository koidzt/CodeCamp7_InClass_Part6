import { uniqueId } from 'lodash';

const initialState = {
  counter: 0,
  resultList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "RESET":
      return {
        ...state,
        counter: 0
      };
    case "STORE_RESULT":
      return {
        ...state,
        resultList: [...state.resultList, { id: uniqueId(), result: action.counter }]
      }
    case "DELETE_RESULT":
      return {
        ...state,
        resultList: [...state.resultList.filter(rs => Number(rs.id) !== Number(action.id))]
      }
    default:
      return state;
  }
};

export default reducer;