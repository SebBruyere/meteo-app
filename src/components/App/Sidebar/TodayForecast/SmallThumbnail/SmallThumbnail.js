import React from 'react';
import './SmallThumbnail.css';

function SmallThumbnail(props) {
    return (
        <div className="smallthumbnail" >
            <h5>{props.todayForecast.hour}</h5>
            <img className="" src={props.todayForecast.weatherIcon ? props.todayForecast.weatherIcon : ""} alt="Weather Icon" />
            <h4>{props.todayForecast.currentTemp ? props.todayForecast.currentTemp + "°" : ""}</h4>
        </div>
    );
}

export default SmallThumbnail;
