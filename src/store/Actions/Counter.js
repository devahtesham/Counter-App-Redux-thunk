// here we define our first action
// Actions are plain js functions
const AddCounterAction = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_COUNTER",
      // payload,
    });
  };
};
// our second action
const MinusCounterAction = () => {
  return (dispatch) => {
    dispatch({
      type: "MINUS_COUNTER",
      // payload,
    });
  };
};
export { AddCounterAction, MinusCounterAction };
