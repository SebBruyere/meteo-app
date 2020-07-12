import React from 'react';
import SearchBar from './SearchBar';
import TodayWeather from './TodayWeather';
import TodayForecast from './TodayForecast';

import "./Sidebar.css";

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            this.props.handleEnter(e.target.value);
        }
    }

    render() {
        let todaySummary = this.props.todaySummary;
        let hourlyForecast = this.props.hourlyForecast;

        return (

            <div className={`component-sidebar d-flex flex-column justify-content-center ${this.props.isDataLoaded ? "fullheight" : ""}`} >
                <h1 className="mb-5">Today's weather</h1>
                <SearchBar keydown={this.handleKeyDown} />
                { this.props.isDataLoaded &&
                    <div>
                        <TodayWeather todaySummary={todaySummary} />
                        <TodayForecast todayForecast={hourlyForecast} />
                    </div>
                }
            </div>
        );
    }
}
