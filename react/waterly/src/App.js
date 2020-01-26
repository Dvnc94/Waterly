import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/Home";
import Timer from "./Timer/Timer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/timer' component={Timer} />
        </Router>
      </div>
    );
  }
}

export default App;
