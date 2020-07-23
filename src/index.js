import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>React Assignment 106</h1>
      <div className="msg">URL: </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
