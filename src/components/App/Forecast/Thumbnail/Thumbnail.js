import React from 'react';
import './Thumbnail.css';

function Thumbnail(props) {

    return (
        <div className="wrapper-thumbnail mt-5 mb-5 ml-2 mr-2 col-xs-6 col-md-6 col-lg-3 col-xl-2 text-center">
            <h4>{props.forecastData.currentTemp ? props.forecastData.currentTemp + "°" : ""}</h4>
            <p>{props.forecastData.weatherDesc}</p>
            <img class="" src={props.forecastData.weatherIcon ? props.forecastData.weatherIcon : ""}/>
        </div>
    );
}

export default Thumbnail;
