const defaultState = {
  title: "Week3",
};
export default function Week3(state, action) {
  if (typeof state === "undefined") {
    return 0;
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
