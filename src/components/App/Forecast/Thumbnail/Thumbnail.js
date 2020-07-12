import React from 'react';
import './Thumbnail.css';

function Thumbnail(props) {
    return (
        <div className="thumbnail d-flex flex-column justify-content-around">
            <div>
                <h4>{props.forecastData.currentTemp ? props.forecastData.currentTemp + "°" : ""}</h4>
                <p>{props.forecastData.weatherDesc}</p>
            </div>
            <div>
                <img className="" src={props.forecastData.weatherIcon ? props.forecastData.weatherIcon : ""} alt="Weather Icon"/>
                <h4>{props.forecastData.dayName}</h4>
            </div>
        </div>
    );
}

export default Thumbnail;
