import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default class APIService {

    constructor() {
        this.apiKey = "109ff3545de4ef5f87dacbb3775a0e1f";
        this.apiUrlWeather = "https://api.openweathermap.org/data/2.5/weather";
        this.apiUrlForecast = "https://api.openweathermap.org/data/2.5/forecast";
        this.defaultCity = "Nice";
    }

    getApiKey() {
        return this.apiKey;
    }

    getApiUrlWeather() {
        return this.apiUrlWeather;
    }
    getApiUrlForecast() {
        return this.apiUrlForecast;
    }
    getDefaultCity() {
        return this.defaultCity;
    }

    sanitizeDataWeather(json) {
        var jsonData = {
            name: json.data.name,
            currentTemp: json.data.main.temp,
            weatherDesc: json.data.weather[0].description,
            weatherIcon: "http://openweathermap.org/img/wn/" + json.data.weather[0].icon + "@2x.png",
            country: json.data.sys.country
        };

        return JSON.stringify(jsonData);
    }

    sanitizeDataForecast(json) {
        const week = json.data.list;
        var weekData = [];

        for(var i = 0; i < 8; i++) {
            weekData.push(this.sanitizeOneDayForecast(week[i]));
        }

        return JSON.stringify(weekData);
    }

    sanitizeOneDayForecast (json) {
        var jsonData = {
            currentTemp: json.main.temp,
            weatherDesc: json.weather[0].description,
            weatherIcon: "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png",
        };

        return jsonData;
    }

    // fetchApiData(input) {
    //     // console.log(input);
    //     // console.log(`${this.apiUrl}?appid=${this.apiKey}&q=${input}&units=metric`);
    //     axios.get(`${this.apiUrl}?appid=${this.apiKey}&q=${input}&units=metric`)
    //      .then(res => {
    //        return res.data;
    //      })
    // }

  //   constructor(props) {
  //       super(props);
  //   }
  //   const [appState, setAppState] = useState({
  //       loading: false,
  //       repos: null,
  // });
  //
  //   useEffect(() => {
  //       setAppState({ loading: true });
  //       const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
  //       fetch(apiUrl)
  //           .then((res) => res.json())
  //           .then((repos) => {
  //           setAppState({ loading: false, repos: repos });
  //       });
  //   }, [setAppState]);
}
