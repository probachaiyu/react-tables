import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table1 from "../Table1/Table1.js";
import Table2 from "../Table2/Table2.js";
import Table3 from "../Table3/Table3.js";
import Home from "../Home/Home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/react_bootstrap_table">React Bootstrap Table</Link></li>
          <li><Link to="/react-table">React Table</Link></li>
          <li><Link to="/griddle">Griddle</Link></li>
        </ul>
        </div>
        
        <div>
      
      <Route exact path="/" component={Home} />
      <Route path="/react_bootstrap_table" component={Table1} />
      <Route path="/react-table" component={Table2} />
      <Route path="/griddle" component={Table3} />

  </div>
</div>
  </Router>
    );
  }
}

export default App;
