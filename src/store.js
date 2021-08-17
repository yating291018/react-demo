import { createStore } from "redux";

function reducer(state = 1, action) {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
