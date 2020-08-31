import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {routes as Routes} from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
