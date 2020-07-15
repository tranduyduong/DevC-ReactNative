import { combineReducers } from "redux";
import week2Reducer from "../components/week2/reducer.js";
import week3Reducer from "../components/week3/reducer.js";

function counter(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default combineReducers({
  count: counter,
  week2: week2Reducer,
  week3: week3Reducer,
});
