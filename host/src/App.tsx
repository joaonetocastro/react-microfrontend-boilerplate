import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import "./index.css";

const App = () => (
  <div className="container">
    <div>Host</div>
    <Counter initialState={7} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
