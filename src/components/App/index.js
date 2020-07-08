import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Forecast from './Forecast';
import APIService from './APIService';
import axios from 'axios';

const service = new APIService();

function App () {

    const [appState, setAppState] = useState({
        loading: false,
        weatherData: [],
        city: null,
    });

    const fetchApiData = (event) => {
        axios.get(`${service.getApiUrl()}?appid=${service.getApiKey()}&q=${event}&units=metric&lang=fr`)
         .then(res => {
             return service.sanitizeData(res.data);
         }).then(result => {
             setAppState({weatherData: result})
         });
    }

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <body className="App-body">
                <Sidebar
                    city={appState.city}
                    weatherData={appState.weatherData}
                    handleEnter={fetchApiData}
                />
                <Forecast city={appState.city} weatherData={appState.weatherData} />
            </body>
        </div>
    );
}

export default App;
