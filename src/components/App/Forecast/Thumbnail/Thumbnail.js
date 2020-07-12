import React from 'react';
import './Thumbnail.css';

function Thumbnail(props) {
    return (
        <div className="" >
            <h4>{props.forecastData.currentTemp ? props.forecastData.currentTemp + "°" : ""}</h4>
            <p>{props.forecastData.weatherDesc}</p>
            <img className="" src={props.forecastData.weatherIcon ? props.forecastData.weatherIcon : ""} alt="Weather Icon"/>
            <h4>{props.forecastData.dayName}</h4>
        </div>
    );
}

export default Thumbnail;
