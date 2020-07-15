const defaultState = {
  title: "Week3",
};
export default function Week3(state = defaultState, action) {
  if (typeof state === "undefined") {
    return state;
  }

  switch (action.type) {
    case "WEEK3_ACTION1":
      return state;
    case "WEEK3_ACTION2":
      return state;
    default:
      return state;
  }
}
