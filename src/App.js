import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './Routes';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Switch>
          { routes }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
