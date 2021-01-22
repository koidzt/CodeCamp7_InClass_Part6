import axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";
export const ADD_SPECIAL_RESULT = "ADD_SPECIAL_RESULT";

// ACTION CREATORS
// function that returns an action.
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function add(value) {
  return { type: ADD, value };
}

export function subtract(value) {
  return { type: SUBTRACT, value };
}

export function reset() {
  return { type: RESET };
}

export function storeResult(value) {
  return { type: STORE_RESULT, counter: value };
}

/*
export function storeResult(value) {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
}

function saveResult(value) {
  return { type: STORE_RESULT, counter: value };
}
*/

export function deleteResult(id) {
  return { type: DELETE_RESULT, id };
}

export function addSpecialResult() {
  return dispatch => {
    axios.get("https://run.mocky.io/v3/c4ef42da-f959-4b00-a0f3-00c11d853c86")
      .then(res => {
        dispatch(addSpecialResultActionCreator(res.data))
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function addSpecialResultActionCreator(spL) {
  return { type: ADD_SPECIAL_RESULT, spcRL: spL }
}