import React, { Component } from 'react';
import { withRouter, router } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './home.css';
import boil from "../../public/boil.png";
import car from "../../public/car-wash.png";
import brush from "../../public/toothbrush.png";
import tap from "../../public/tap.png";
import shower from "../../public/shower.png";

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showStart: true,
        boil: 0,
        brush: 0,
        car: 0,
        tap: 0,
     };
  }
  timer = () => {
    window.location.href = "/timer"; 
  }
  increment = (e,v) => {
    this.setState({ [v]: this.state[v]+1 });
    console.log(v, (this.state)[v], this.state);
  }
  decrement = (e,v) => {
    if(this.state[v] != 0) this.setState({ [v]: this.state[v]-1 });
    console.log(v, (this.state)[v]);
  }
  render() {
    return (
      <div className="home-container">
        <div className="app-heading">Waterly</div>
        <div className="content">
            <div className="water-usage-blocks-container">
                <div className="water-usage-block">
                    <div className="icon-circle" >
                        <img src={shower} className="image" alt="NA" onClick={() => this.timer()} />
                    </div>
                </div>
                <div className="water-usage-block">
                    <div className="gallons">
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={(e) => this.increment(e, "boil")} />
                        <div className="times">{this.state.boil}</div>
                        <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "boil")} />
                    </div>
                    <div className="icon-circle">
                        <img src={boil} className="image" alt="NA" />   
                    </div>
                </div>
                <div className="water-usage-block">
                <div className="gallons">
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={(e) => this.increment(e, "brush")} />
                        <div className="times">{this.state.brush}</div>
                        <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "brush")} />
                    </div>
                    <div className="icon-circle">
                        <img src={brush} className="image" alt="NA" />  
                    </div>
                </div>
                <div className="water-usage-block">
                <div className="gallons">
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={(e) => this.increment(e, "tap")} />
                        <div className="times">{this.state.tap}</div>
                        <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "tap")}/>
                    </div>
                    <div className="icon-circle">
                        <img src={tap} className="image" alt="NA" />  
                    </div>
                </div>
                <div className="water-usage-block">
                <div className="gallons">
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={(e) => this.increment(e, "car")} />
                        <div className="times">{this.state.car}</div>
                        <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "car")} />
                    </div>
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

export default withRouter(Home);