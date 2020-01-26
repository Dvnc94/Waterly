import React, { Component } from 'react';
import './home.css';

class App extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="app-heading">Waterly</div>
        <div className="content">
            <div className="water-usage-blocks-container">
                <div className="water-usage-block">
                    <div className="icon-circle">Shower</div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">Cooking</div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">Washing Hands</div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">Brushing Teeth</div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">Car Wash</div>
                </div>
            </div>
            <div className="progress-container">
                Progress
            </div>
        </div>
      </div>
    );
  }
}

export default App;