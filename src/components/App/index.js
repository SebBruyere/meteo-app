import React, { useState } from 'react';
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
        todaySummary: [],
        todayForecast: [],
        remainingForecast: [],
        city: null,
    });

    const fetchApiData = (event) => {
        const todayWeatherRequest = axios.get(`${service.getApiUrlWeather()}?appid=${service.getApiKey()}&q=${event}&units=metric&lang=fr`);
        const forecastRequest = axios.get(`${service.getApiUrlForecast()}?appid=${service.getApiKey()}&q=${event}&units=metric&lang=fr`);

        axios.all([todayWeatherRequest, forecastRequest])
            .then(axios.spread((...responses) => {
                const todayWeatherRes = responses[0];
                const forecastRes = responses[1];

                const forecastSanitizing = service.sanitizeDataForecast(forecastRes)

                setAppState({
                    todaySummary: service.sanitizeDataWeather(todayWeatherRes),
                    todayForecast: JSON.stringify(forecastSanitizing.todayForecast),
                    remainingForecast: JSON.stringify(forecastSanitizing.remainingForecast)
                });

            // use/access the results
            })).catch(errors => {

        })
    }

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
                                todaySummary={appState.todaySummary ? appState.todaySummary : false}
                                todayForecast={appState.todayForecast ? appState.todayForecast : false}
                                handleEnter={fetchApiData}
                            />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-8 col-xl-9 mt-3 mb-3">
                            <Forecast
                                city={appState.city}
                                forecastData={appState.remainingForecast ? appState.remainingForecast : false}
                            />
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
