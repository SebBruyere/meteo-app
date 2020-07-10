import React from 'react';
import SearchBar from './SearchBar';
import TodayWeather from './TodayWeather';

import "./Sidebar.css";

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props)

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

        let weatherData = this.props.weatherData;

        // If not empty
        if(weatherData.length > 0) {
            weatherData = JSON.parse(weatherData);
        }

        return (
            <div className="component-sidebar">
                <h1 className="mb-5">Today's weather</h1>
                <SearchBar city={this.state.city} keydown={this.handleKeyDown} />
                <TodayWeather weatherData={weatherData}/>
            </div>
        );
    }
}
