import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";

const App = () => (
  <div className="App">
    <Main />
    <GymProgram />
    <Member />
  </div>
);

export default App;
