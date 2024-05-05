// App.js
import React from "react";
import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { store } from "./store/index";
import { Themes } from "./components/Themes";
import { Display } from "./components/Display";


const App = () => {
  return (
    <Provider store={store}>
      <Counter /> 
      <Themes />
      <Display/>
    </Provider>
  );
};

export default App;
