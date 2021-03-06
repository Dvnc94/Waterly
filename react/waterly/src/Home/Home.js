// Import dependencies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// import Fade from 'react-fade-opacity'


// Import styling
import './home.css';
import logo from '../../public/flowless.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
        },
        user_id: '',
        bill:0,
        andrew: 0,
        eric: 0,
        divyanshi: 0,
        ilan: 0
     };
     this.arr = ["bill","andrew","eric","divyanshi","ilan"];
    
  }

  componentDidMount = () => {
    this.arr.forEach(user => {
        return axios.get(`${API_ROOT}/analytics/${user}/total`)
        .then(result => {
          console.log(result.data);
          this.setState({ [user]: result.data.analytics.totalGallons });
        }).catch(error => {
            console.log(error);
        })
      })
  }

  fetchAnalytics = () => {
    axios.get(`${API_ROOT}/analytics/${this.state.user_id}/total`)
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
    if(this.state[v] !== 0) this.setState({ [v]: this.state[v]-1 });
    console.log(v, (this.state)[v]);
  }

  addToothBrush = () => {
        axios.post(`${API_ROOT}/oral/teeth`, { id: this.state.user_id })
        .then(result => {
            this.fetchAnalytics();
        })
        .catch(error => {
            console.log(error);
        })
  }

  addCarWash = () => {
      axios.post(`${API_ROOT}/carwash/`, { id: this.state.user_id })
      .then(result => {
          console.log(result);
        this.fetchAnalytics();
    })
    .catch(error => {
        console.log(error);
    })
  }

  addWashHands = () => {
      axios.post(`${API_ROOT}/washhands/`, { id: this.state.user_id })
      .then(result => {
        console.log(result);
      this.fetchAnalytics();
  })
  .catch(error => {
      console.log(error);
  })
  }

  updateUser = (event) => {
      var newUser = event.target.value;
      console.log(newUser);
      this.setState({ user_id: newUser });
      
      setTimeout(() => {
        this.fetchAnalytics();
      }, 1000);
      
  }

  render() {
      console.log(this.state);   
    return (
      <div className="home-container">
        <img src={logo} className="app-logo" />

        <select className="custom-select" value={this.state.user_id} onChange={this.updateUser.bind(this)} >
            <option > </option>
            <option value="bill">bill</option>
            <option value="andrew">andrew</option>
            <option value="eric">eric</option>
            <option value="divyanshi">divyanshi</option>
            <option value="ilan">ilan</option>
        </select>
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
                 {
                   this.state.analytics.totalGallons > 100 ?
                <img id="plant1" src={plant1} className="plantImage" alt="NA"  ></img>
               : null
            } {  this.state.analytics.totalGallons > 90 && this.state.analytics.totalGallons < 100 ?
                <img id="plant2" src={plant2} className="plantImage" alt="NA"   ></img>
               : null
            }{  this.state.analytics.totalGallons > 80 && this.state.analytics.totalGallons < 90 ?
                <img id="plant3" src={plant3} className="plantImage" alt="NA"  ></img>
             : null
            } {  this.state.analytics.totalGallons > 70 && this.state.analytics.totalGallons < 80?
                <img id="plant4" src={plant4} className="plantImage" alt="NA"  ></img>
             :null   } {  this.state.analytics.totalGallons > 60 && this.state.analytics.totalGallons < 70 ?
                <img id="plant5" src={plant5} className="plantImage" alt="NA"  ></img>
              :null } {  this.state.analytics.totalGallons > 50 && this.state.analytics.totalGallons < 60 ?
                <img id="plant6" src={plant6} className="plantImage" alt="NA"   ></img>
              :null } {  this.state.analytics.totalGallons > 40 && this.state.analytics.totalGallons < 50?
                <img id="plant7" src={plant7} className="plantImage" alt="NA"  ></img>
              : null }
            </div>
            <div className="userStats">
                <div className="scores">See all scores</div>
                <div className="scores">Bill : {this.state.bill || 0}</div>
                <div className="scores">Andrew : {this.state.andrew || 0}</div>
                <div className="scores">Eric : {this.state.eric || 0}</div>
                <div className="scores">Divyanshi : {this.state.divyanshi || 0}</div>
                <div className="scores">Ilan : {this.state.ilan || 0}</div>
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