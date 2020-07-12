import React from 'react';
import SearchBar from './SearchBar';
import TodayWeather from './TodayWeather';
import TodayForecast from './TodayForecast';

import "./Sidebar.css";

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        // Bind the this context to the handler function
        this.handleKeyDown = this.handleKeyDown.bind(this);

        // Set some state
        this.state = {
            city: this.props.city,
            weatherInfo: null,
            error: false,
        };
    }

    handleKeyDown (e) {
        if(e.key === "Enter") {
            this.props.handleEnter(e.target.value);
        }
    }

    render() {

        let todaySummary = this.props.todaySummary;
        let hourlyForecast = this.props.hourlyForecast;

        console.log(todaySummary);

        // If not empty today summary
            // if(todaySummary.length > 0) {
            //     todaySummary = JSON.parse(todaySummary);
            // }

        return (
            <div className="component-sidebar">
                <h1 className="mb-5">Today's weather</h1>
                <SearchBar city={this.state.city} keydown={this.handleKeyDown} />
                <TodayWeather todaySummary={todaySummary} />
                <TodayForecast todayForecast={hourlyForecast} />
            </div>
        );
    }
}
