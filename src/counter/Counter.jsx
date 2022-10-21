import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCounterAction, MinusCounterAction } from "../store/Actions/Counter";
import "./Counter.css";
const Counter = () => {
  // let [counter, setCounter] = useState(0); // private state

  // to call an action from UI we call a hook useDispatch()
  const dispatch = useDispatch();
  // to access a global state on UI we call a hook useSelector()
  const selector = useSelector((state) => state.addCounterReducer); // yahan state men mjhy list of reducers milygi agr mene combine reducer point kiaa hy store pr
  const { globalCounter } = selector;
  console.log(selector);
  const addCounter = () => {
    // setCounter(++counter);
    dispatch(AddCounterAction()); // in dispatch we pass our Action which we created in redux
  };
  const minusCounter = () => {
    // setCounter(--counter);
    dispatch(MinusCounterAction()); // in dispatch we pass our Action which we created in redux
  };
  return (
    <>
      <div className="heading">
        <h1 className="text-center text-white fst-italic">
          Counter Application
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="app__container d-flex flex-column align-items-center mt-5">
              <div className="counter__container mb-4">
                <h3 className="mb-0">{globalCounter}</h3>
              </div>
              <div className="mt-3 mb-2">
                <button className=" btn__custom btn-1" onClick={addCounter}>
                  +
                </button>
                <button className=" btn__custom btn-2" onClick={minusCounter}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
