import React from 'react';
import './Forecast.css';
import Thumbnail from './Thumbnail';
import { CSSTransitionGroup } from 'react-transition-group'

export default class Forecast extends React.Component {
    render() {

        let forecastData = this.props.forecastData;
        let items = [];

        if(forecastData.length) {
            forecastData = JSON.parse(this.props.forecastData);
            items = forecastData.map((oneDay, i) => (
                <div className="wrapper-thumbnail mt-5 mb-5 ml-2 mr-2 col-xs-6 col-md-6 col-lg-3 col-xl-2 text-center">
                    <Thumbnail key={i.toString()} forecastData={oneDay} />
                </div>
            ));
        }

        return(
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
