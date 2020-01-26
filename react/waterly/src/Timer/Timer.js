import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap/Dropdown'
import './timer.css';
import start from "../../public/start1.png";
import {postCall} from "../api";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0,
          showCounter: false
       };
    }
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
        showCounter:true
      }));
    }
    startTimer = () => {
      if(this.state.seconds === 0) this.interval = setInterval(() => this.tick(), 1000);
    }
    stopTimer = () => {
      clearInterval(this.interval);
      console.log(this.state, this.interval);
      this.state.gallons = postCall({id: "alovelace", duration: this.state.seconds});   
    }
    setseconds = (val) => {
      this.setState({ seconds: val });
    }
  render() {
    return (
        <div className="timer-container">    
          <div className="app-heading">Waterly</div>
          <div className="message">Let us know how long your shower lasted!</div>  
          {this.state.seconds && this.state.showCounter > 0 ? 
            <div className="counter">
              <div className="count" >{this.state.seconds}</div>
              <Button variant="danger" size="lg" onClick={this.stopTimer} >Stop</Button>
            </div>
          : <img src={start} className="start" alt="NA" onClick={this.startTimer}/>}
          <div className="manual">
            <input placeholder="Enter manually ( in mins )" className="input" onChange={e => this.setseconds(e.target.value)}/>
            <Button variant="success" size="lg" className="submit" onClick={this.stopTimer} >Submit</Button>
          </div>  

        </div>
    );
  }
}

export default Timer;