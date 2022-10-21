// In this file we create our store

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Combine from "./Reducers/CombinedReducer";

// store contain Reducer function
const store = createStore(Combine, {}, applyMiddleware(thunk));
export default store;
