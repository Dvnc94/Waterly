import React, { Component } from 'react';
import './timer.css';
import start from "../../public/start1.png";
import {postCall} from "../api";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0,
       };
    }
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }
    startTimer = () => {
      if(this.state.seconds === 0) this.interval = setInterval(() => this.tick(), 1000);
    }
    stopTimer = () => {
      clearInterval(this.interval);
        console.log(this.state, this.interval);
      postCall({id: "alovelace", duration: this.state.seconds});
      
    }
  render() {
    return (
        <div className="timer-container">      
          <img src={start} className="image" alt="NA" onClick={this.startTimer}/>
          <div className="gallons" onClick={this.startTimer} >Start</div>
          <div>{this.state.seconds}</div>
          <div className="gallons" onClick={this.stopTimer} >Stop</div>
        </div>
    );
  }
}

export default Timer;