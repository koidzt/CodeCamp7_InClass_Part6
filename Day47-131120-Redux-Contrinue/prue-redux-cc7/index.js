const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// REDUCERS
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { ...state, counter: state.counter + 1 };

    case "ADD_COUNTER":
      return { ...state, counter: state.counter + action.value };

    case "DECREASE_COUNTER":
      return { ...state, counter: state.counter - 1 };

    case "RESET_COUNTER":
      return { ...state, counter: 0 };

    case "SET_NAME":
      return { ...state, name: action.name };

    case "RESET_NAME":
      return { ...state, name: "" };
    default:
      return state;
  }
}

// STORE
const store = createStore(rootReducer);
console.log(store.getState());

// SUBSCRIPTION
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// DISPATCHES ACTION
store.dispatch({ type: "INCREASE_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
store.dispatch({ type: "DECREASE_COUNTER" });
store.dispatch({ type: "RESET_COUNTER" });
store.dispatch({ type: "SET_NAME", name: "Sonter" })
store.dispatch({ type: "RESET_NAME" })
console.log(store.getState());