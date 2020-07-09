import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Forecast from './Forecast';
import APIService from './APIService';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const service = new APIService();

function App () {

    const [appState, setAppState] = useState({
        loading: false,
        weatherData: [],
        forecastData: [],
        city: null,
    });

    const fetchApiData = (event) => {
        const weatherRequest = axios.get(`${service.getApiUrlWeather()}?appid=${service.getApiKey()}&q=${event}&units=metric&lang=fr`);
        const forecastRequest = axios.get(`${service.getApiUrlForecast()}?appid=${service.getApiKey()}&q=${event}&units=metric&lang=fr`);

        axios.all([weatherRequest, forecastRequest])
            .then(axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];

                setAppState({
                    weatherData: service.sanitizeDataWeather(responseOne),
                    forecastData: service.sanitizeDataForecast(responseTwo)
                });
            // use/access the results
            })).catch(errors => {

        })
    }

    //fetchApiData(service.getDefaultCity());

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <body className="App-body">
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 text-center">
                            <Sidebar
                                city={appState.city}
                                weatherData={appState.weatherData ? appState.weatherData : false}
                                handleEnter={fetchApiData}
                            />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-8 col-xl-9 mt-3 mb-3">
                            <Forecast
                                city={appState.city}
                                forecastData={appState.forecastData ? appState.forecastData : false}
                            />
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
