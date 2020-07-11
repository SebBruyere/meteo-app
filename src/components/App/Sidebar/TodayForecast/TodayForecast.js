import React from 'react';
import "./TodayForecast.css";
import SmallThumbnail from "./SmallThumbnail";

export default class TodayForecast extends React.Component {
    render() {

        let forecastData = this.props.todayForecast;
        let items = [];

        if(forecastData.length) {
            //console.log(forecastData);
            //forecastData = JSON.parse(this.props.todayForecast);
            items = forecastData.map((oneDay, i) => (
                <div className="wrapper-thumbnail mt-2 mb-5 ml-2 mr-2 col-xs-12 text-center">
                    <SmallThumbnail key={i.toString()} todayForecast={oneDay} />
                </div>
            ));
        }

        return(
            <div className="component-forecast">
                <div className="container">
                    <div className="row flex-nowrap wrapper-smallthumbnail">
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}
