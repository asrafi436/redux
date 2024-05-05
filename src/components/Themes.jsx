// counter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Themes = () => {

  const dispatch = useDispatch();


  return (
    <div>
      <h2>Change Theme</h2>
      <button onClick={() => dispatch({type:'text/fontColor', value: 'blue'})}>
        Text Color
      </button>
      <button onClick={() => dispatch({type:'text/fontSize', value: '18px'})}>
        Font Size
      </button>
      <button onClick={() => dispatch({type:'text/backgroundColor', value: 'yellow'})}>
        Background Color
      </button>
      <button onClick={() => dispatch({type:'text/reset', value: 0})} >Reset</button>
    </div>
  );
};
