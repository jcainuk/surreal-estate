import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/AddProperty" component={AddProperty} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
