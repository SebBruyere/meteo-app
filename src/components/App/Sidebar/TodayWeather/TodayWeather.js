import React from 'react';

    function TodayWeather(props) {

        return (
            <div className="mt-5">
                <h3>{props.todaySummary.name}&nbsp;{props.todaySummary.country ? '(' + props.todaySummary.country  + ')' : ''}</h3>
                <h1>{props.todaySummary.currentTemp ? props.todaySummary.currentTemp + "°" : ""}</h1>
                <h4>{props.todaySummary.weatherDesc}</h4>
                <img className="" src={props.todaySummary.weatherIcon ? props.todaySummary.weatherIcon : ""} alt="" />
            </div>
        );
    }

export default TodayWeather;
