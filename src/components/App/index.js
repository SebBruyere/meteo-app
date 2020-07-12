import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Forecast from './Forecast';
import APIService from './APIService';
import 'bootstrap/dist/css/bootstrap.css';

const service = new APIService();

export default class App extends React.Component {
    constructor() {
        super();

        this.isDataLoaded = false;

        this.fetchApiData = this.fetchApiData.bind(this);
        this.state = {
            todaySummary: null,
            hourlyForecast: null,
            dailyForecast: null,
            isAPIError: false
        };
    }

    fetchApiData(event, coords) {
        service.fetchApiData(event, coords, (weatherData) => {
            if (!weatherData.error) {
                this.isDataLoaded = true;
                this.isAPIError = false;
                this.setState({
                    todaySummary: weatherData.todaySummary,
                    hourlyForecast: weatherData.hourlyForecast,
                    dailyForecast: weatherData.dailyForecast,
                });
            } else {
                this.setState({
                    isAPIError: true
                });
            }
        });
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) => {
                this.fetchApiData(null, position.coords);
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <div className="App-body">
                    <div className="container-fluid">
                        <div className="row h-100">
                            <div className="col-xs-12 col-md-6 col-lg-4 mt-3 mb-3 text-center">
                                <Sidebar
                                    todaySummary={this.state.todaySummary ? this.state.todaySummary : false}
                                    hourlyForecast={this.state.hourlyForecast ? this.state.hourlyForecast : false}
                                    handleInputVal={this.fetchApiData}
                                    isDataLoaded={this.isDataLoaded}
                                    isAPIError={this.state.isAPIError}
                                />
                            </div>
                            { this.isDataLoaded &&
                                <div className="col-xs-12 col-md-6 col-lg-8 mt-3 mb-3 align-self-end">
                                    <Forecast
                                        city={this.state.city}
                                        forecastData={this.state.dailyForecast ? this.state.dailyForecast : false}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
