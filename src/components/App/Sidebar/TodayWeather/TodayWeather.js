import React from 'react';

    function TodayWeather(props) {

        return (
            <div className="mt-5">
                <h1>{props.todaySummary.name}&nbsp;{props.todaySummary.country ? '(' + props.todaySummary.country  + ')' : ''}</h1>
                <h1>{props.todaySummary.currentTemp ? props.todaySummary.currentTemp + "°" : ""}</h1>
                <h1>{props.todaySummary.weatherDesc}</h1>
                <img className="" src={props.todaySummary.weatherIcon ? props.todaySummary.weatherIcon : ""} />
            </div>
        );
    }

export default TodayWeather;
