import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

const Combine = combineReducers({
  addCounterReducer: CounterReducer,
});
export default Combine;
