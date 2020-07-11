import React from 'react';
import './SmallThumbnail.css';

function SmallThumbnail(props) {
    return (
        <div className="" >
        {console.log(props)}
            <h5>{props.todayForecast.hourToDisplay}</h5>
            <img className="" src={props.todayForecast.weatherIcon ? props.todayForecast.weatherIcon : ""} alt="Weather Icon"/>
            <h4>{props.todayForecast.currentTemp ? props.todayForecast.currentTemp + "°" : ""}</h4>
        </div>
    );
}

export default SmallThumbnail;
