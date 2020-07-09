import React from 'react';
import './Forecast.css';
import Thumbnail from './Thumbnail';

export default class Forecast extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let forecastData = this.props.forecastData;

        if(forecastData.length) {
            forecastData = JSON.parse(this.props.forecastData);
        }

        return(
            <div className="component-forecast">
                <h1>Week forecast</h1>
                <div className="container">
                    <div className="row">
                        {forecastData.length ?
                            forecastData.map(oneDay => <Thumbnail forecastData={oneDay} />) :
                            ""
                        }
                    </div>
                </div>
            </div>
        )
    }

}
