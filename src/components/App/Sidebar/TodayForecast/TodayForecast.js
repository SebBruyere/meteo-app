import React from 'react';
import "./TodayForecast.css";
import SmallThumbnail from "./SmallThumbnail";
import ScrollContainer from 'react-indiana-drag-scroll';

export default class TodayForecast extends React.Component {
    render() {
        let forecastData = this.props.todayForecast;
        let items = [];

        if (forecastData.length) {
            items = forecastData.map((oneDay, i) => (
                <div key={i} className="wrapper-thumbnail mt-2 mb-5 ml-2 mr-2 col-xs-12 text-center">
                    <SmallThumbnail  todayForecast={oneDay} />
                </div>
            ));
        }

        return (
            <div className="container">
                <ScrollContainer className="scroll-container">
                    <div className="row flex-nowrap wrapper-smallthumbnail">
                        {items}
                    </div>
                </ScrollContainer>
            </div>
        )
    }
}
