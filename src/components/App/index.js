import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Forecast from './Forecast';
import APIService from './APIService';
import axios from 'axios';

// class App extends React.Component {
//
//     constructor (props) {
//         super(props);
//
//         this.state = {
//             weatherInfo: []
//         };
//     }
//
//     render() {
//         return (
//           <div className="App">
//             <header className="App-header">
//             </header>
//             <body className="App-body">
//                 <Sidebar data={this.state.weatherInfo} />
//                 <Forecast data={this.state.weatherInfo} />
//             </body>
//           </div>
//         );
//     }
// }

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
             setAppState({weatherData: JSON.stringify(res.data)})
         })
    }

    // async function fetchApiData(e) {
    //     let response = await service.fetchApiData(e);
    //     let data = await response.json()
    //     console.log(data);
    // }

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
