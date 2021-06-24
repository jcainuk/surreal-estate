import React from "react";
import "../styles/App.css";
import { Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch />
    </div>
  );
}

export default App;
