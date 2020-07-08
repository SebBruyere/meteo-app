import React from 'react';

    function TodayWeather(props) {

        return (
            <div>
                <h1>{props.weatherData.name}&nbsp;{props.weatherData.country ? '(' + props.weatherData.country  + ')' : ''}</h1>
                <h1>{props.weatherData.currentTemp ? props.weatherData.currentTemp + "°" : ""}</h1>
                <h1>{props.weatherData.weatherDesc}</h1>
                <img class="" src={props.weatherData.weatherIcon ? props.weatherData.weatherIcon : ""}/>
            </div>
        );
    }

export default TodayWeather;
