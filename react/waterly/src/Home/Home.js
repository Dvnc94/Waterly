// Import dependencies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


// Import styling
import './home.css';
import logo from '../../public/flowless.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import boil from "../../public/boil.png";
import car from "../../public/car.png";
import brush from "../../public/toothbrush.png";
import tap from "../../public/tap.png";
import shower from "../../public/shower.png";
import plant1 from "../../public/progress/1.png";
import plant2 from "../../public/progress/2.png";
import plant3 from "../../public/progress/3.png";
import plant4 from "../../public/progress/4.png";
import plant5 from "../../public/progress/5.png";
import plant6 from "../../public/progress/6.png";
import plant7 from "../../public/progress/7.png";
import { Line } from 'rc-progress';

// Import config
import { API_ROOT } from '../config/config.json';


class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
        showStart: true,
        boil: 0,
        brush: 0,
        car: 0,
        tap: 0,
        analytics: {
            showers: { count: 0 },
            oral: { count: 0 },
            carwash: { count: 0 },
            washhands: { count: 0 }
        }
     };
  }

  componentDidMount = () => {
      this.fetchAnalytics();
  }

  fetchAnalytics = () => {
    axios.get(`${API_ROOT}/analytics/alovelace/total`)
    .then(result => {
      console.log(result.data);
      this.setState({ analytics: result.data.analytics });
    })
    .catch(error => {
        console.log(error);
    })
  }

  navigateToTimer = () => {
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

  addToothBrush = () => {
        axios.post(`${API_ROOT}/oral/teeth`, { id: "alovelace" })
        .then(result => {
            this.fetchAnalytics();
        })
        .catch(error => {
            console.log(error);
        })
  }

  addCarWash = () => {
      axios.post(`${API_ROOT}/carwash/`, { id: "alovelace" })
      .then(result => {
          console.log(result);
        this.fetchAnalytics();
    })
    .catch(error => {
        console.log(error);
    })
  }

  addWashHands = () => {
      axios.post(`${API_ROOT}/washhands/`, { id: "alovelace" })
      .then(result => {
        console.log(result);
      this.fetchAnalytics();
  })
  .catch(error => {
      console.log(error);
  })
  }

  render() {
    return (
      <div className="home-container">
        <img src={logo} className="app-logo" />
        <div className="content">
            <div className="water-usage-blocks-container">
                <div className="water-usage-block">
                <div className="gallons">
                        <div className="times">{this.state.analytics.showers.count}</div>
                    </div>
                    <div className="icon-circle" >
                        <img src={shower} className="image" alt="NA" onClick={() => this.navigateToTimer()} />
                    </div>
                </div>
                <div className="water-usage-block">
                    <div className="gallons">
                        {/* <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "boil")} /> */}
                        <div className="times">{this.state.boil}</div>
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={(e) => this.increment(e, "boil")} />
                    </div>
                    <div className="icon-circle">
                        <img src={boil} className="image" alt="NA" />   
                    </div>
                </div>
                <div className="water-usage-block">
                <div className="gallons">
                        {/* <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "brush")} /> */}
                        <div className="times">{this.state.analytics.oral.count}</div>
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={() => this.addToothBrush()} />
                    </div>
                    <div className="icon-circle">
                        <img src={brush} className="image" alt="NA" />  
                    </div>
                </div>
                <div className="water-usage-block">
                <div className="gallons">
                        {/* <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "tap")} /> */}
                        <div className="times">{this.state.analytics.washhands.count}</div>
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={() => this.addWashHands()} />
                    </div>
                    <div className="icon-circle">
                        <img src={tap} className="image" alt="NA" />  
                    </div>
                </div>
                <div className="water-usage-block">
                <div className="gallons">
                        {/* <FontAwesomeIcon icon={faMinus} className="icons" onClick={(e) => this.decrement(e, "car")} /> */}
                        <div className="times">{this.state.analytics.carwash.count}</div>
                        <FontAwesomeIcon icon={faPlus} className="icons" onClick={() => this.addCarWash()} />
                    </div>
                    <div className="icon-circle">
                        <img src={car} className="image" alt="NA" />  
                        </div>
                    </div>
                </div>
        </div> 
        <div className="bottomPane">
            <div className="planterPot">
                <img src={plant1} className="plantImage" alt="NA" hidden></img>
                <img src={plant2} className="plantImage" alt="NA" hidden></img>
                <img src={plant3} className="plantImage" alt="NA" ></img>
                <img src={plant4} className="plantImage" alt="NA" hidden></img>
                <img src={plant5} className="plantImage" alt="NA" hidden></img>
                <img src={plant6} className="plantImage" alt="NA" hidden></img>
                <img src={plant7} className="plantImage" alt="NA" hidden></img>
            </div>
            <div className="userStats">
                You're doing great, sweetie! 
                20% better than Linda!
            </div>
        </div>
        <div className="progress-container rounded-lg">
            {/* <h3>Progress</h3> */}
            <h5>Total Gallons used today : {this.state.analytics.totalGallons}</h5>
            <Line percent={(Math.floor(this.state.analytics.totalGallons)).toString()} strokeWidth="11" strokeColor="#2C96E8" />
        </div>
           
        </div>
        );
    }
}

export default withRouter(Home);