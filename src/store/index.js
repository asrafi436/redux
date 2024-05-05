import { createStore } from "redux";
import { combineReducers } from "redux";

import { counterReducer } from "./reducer/counterReducer";
import { themeReducer } from "./reducer/themeReducer";


const rootReducer = combineReducers({
  count: counterReducer,
  theme: themeReducer,
});

// Create  Redux store
export const store = createStore(rootReducer);
