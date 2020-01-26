import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
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



class App extends Component {

    toothBrushClicked = () => {
        axios.post('http://localhost:5000/api/oral/teeth', { id: "alovelace" })
        .then(result => {
            console.log("Did not error");
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }

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
                    <div className="water-usage-block" onClick={() => { this.toothBrushClicked() }}>
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
                    <div id="progress">
                    <img src={plant1} className="plantImage" alt="NA"></img>
                    <img src={plant2} className="plantImage" alt="NA"></img>
                    <img src={plant3} className="plantImage" alt="NA"></img>
                    <img src={plant4} className="plantImage" alt="NA"></img>
                    <img src={plant5} className="plantImage" alt="NA"></img>
                    <img src={plant6} className="plantImage" alt="NA"></img>
                    <img src={plant7} className="plantImage" alt="NA"></img>
                    </div>
                
                </div>
            </div>
        </div>
        );
    }
}

export default App;