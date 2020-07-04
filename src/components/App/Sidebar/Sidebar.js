import React, {Component} from 'react';
import SearchBar from './SearchBar';
import TodayWeather from './TodayWeather';

import "./Sidebar.css";

function Sidebar () {
    return (
        <div className="component-sidebar">
            <SearchBar />
            <TodayWeather />
        </div>
    );
}

export default Sidebar;
