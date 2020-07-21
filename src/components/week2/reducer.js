const defaultState = {
  title: "Week2",
};
export default function counter(state = defaultState, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "WEEK2_ACTION1":
      return state + 1;
    case "WEEK2_ACTION1":
      return state - 1;
    default:
      return state;
  }
}
