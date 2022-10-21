// reducers are pure functions
// This is our initial (GLOBAL) state
const INITIAL_STATE = {
  globalCounter: 0,
};
// Counter ki file men 2 actions hen tu ye reducer function unki type k behalf pr actions ko differentiate kregaa
const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      console.log("Add Action call");
      return {
        ...state,
        globalCounter: ++state.globalCounter,
      };
    case "MINUS_COUNTER":
      console.log("Minus Action call");
      return {
        ...state,
        globalCounter: --state.globalCounter,
      };
    default:
      return {
        ...state,
      };
  }
};
export { CounterReducer };
