import { createStore } from "redux";


// type:"counter/incremented"
// value:1
// dibo = dispatch()
//nibo = useSelect()

export function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case "counter/incremented":
        return { value: state.value + action.value }; // Increment by action value
      case "counter/decremented":
        return { value: state.value - action.value }; // Decrement by action value
      default:
        return state;
    }
  }