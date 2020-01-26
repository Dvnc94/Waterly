import React, { Component } from 'react';
import './home.css';
import boil from "../../public/boil.png";
import car from "../../public/car-wash.png";
import brush from "../../public/toothbrush.png";
import tap from "../../public/tap.png";
import shower from "../../public/shower.png";

class App extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="app-heading">Waterly</div>
        <div className="content">
            <div className="water-usage-blocks-container">
                <div className="water-usage-block">
                    <div className="icon-circle">
                        <img src={shower} className="image" alt="NA" />
                    </div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">
                        <img src={boil} className="image" alt="NA" />   
                    </div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">
                        <img src={brush} className="image" alt="NA" />  
                    </div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">
                        <img src={tap} className="image" alt="NA" />  
                    </div>
                </div>
                <div className="water-usage-block">
                    <div className="icon-circle">
                        <img src={car} className="image" alt="NA" />  
                    </div>
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