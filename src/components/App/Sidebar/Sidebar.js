import React, {Component} from 'react';
import SearchBar from './SearchBar';
import TodayWeather from './TodayWeather';

function Sidebar () {
    return (
        <div>
            <SearchBar />
            <TodayWeather />
        </div>
    );
}

export default Sidebar;
