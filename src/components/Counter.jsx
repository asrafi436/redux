// counter.jsx
import React from "react";
import { useDispatch} from "react-redux";
import { increment , decrement } from "../store/action/countAction";



export const Counter = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment(1))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement(1))}>
        Decrement
      </button>
    </div>
  );
};
