import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default class APIService {

    constructor() {
        this.apiKey = "109ff3545de4ef5f87dacbb3775a0e1f";
        this.apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    getApiKey() {
        return this.apiKey;
    }

    getApiUrl() {
        return this.apiUrl;
    }

    cleanData(json) {
        console.log(JSON.parse(json));
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