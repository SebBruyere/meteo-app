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
        hourlyForecast: [],
        dailyForecast: [],
        city: null,
    });

    const fetchApiData = (event) => {
        axios.get(`${service.getApiUrlWeather()}?appid=${service.getApiKey()}&q=${event}&units=metric&lang=fr`)
            .then(res => {
                console.log(res);
                setAppState({
                    todaySummary: service.sanitizeDataWeather(res)
                });
                return axios.get(`${service.getApiUrlOneCall()}?appid=${service.getApiKey()}&lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=current&units=metric&lang=fr`);
            }).then(res => {
                console.log(res);
                setAppState({
                    hourlyForecast: service.sanitizeForecast(res.data.hourly),
                    dailyForecast: service.sanitizeForecast(res.data.daily)
                });
            }).catch(error => console.log(error.response));
    }

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <body className="App-body">
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-xs-12 col-md-6 col-lg-4 mt-3 mb-3 text-center">
                            <Sidebar
                                city={appState.city}
                                todaySummary={appState.todaySummary ? appState.todaySummary : false}
                                hourlyForecast={appState.hourlyForecast ? appState.hourlyForecast : false}
                                handleEnter={fetchApiData}
                            />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-8 mt-3 mb-3">
                            <Forecast
                                city={appState.city}
                                forecastData={appState.dailyForecast ? appState.dailyForecast : false}
                            />
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
