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

    // useEffect(() => {
    //     setAppState({ loading: true });
    //     const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    //     fetch(apiUrl)
    //     .then((res) => res.json())
    //     .then((repos) => {
    //         setAppState({ loading: false, weatherData: repos });
    //     });
    // }, [setAppState]);


    const fetchApiData = (event) => {
        axios.get(`${service.getApiUrl()}?appid=${service.getApiKey()}&q=${event}&units=metric`)
         .then(res => {
            return JSON.stringify(res.data);
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
