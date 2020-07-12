import React from 'react';
import './Forecast.css';
import Thumbnail from './Thumbnail';

import ScrollContainer from 'react-indiana-drag-scroll';

export default class Forecast extends React.Component {
    render() {
        let forecastData = this.props.forecastData;
        let items = [];

        if (forecastData.length) {
            items = forecastData.map((oneDay, i) => (
                <div className="wrapper-thumbnail mt-2 mb-2 col-xs-12 col-md-6 col-lg-3 col-xl-2 text-center">
                    <Thumbnail key={i.toString()} forecastData={oneDay} />
                </div>
            ));
        }

        return (
            <div className="component-forecast">
                <h1 className="text-center">Forecast</h1>
                <div className="container">
                    <div className="row">
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}
