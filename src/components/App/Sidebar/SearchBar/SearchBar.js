import React from 'react';
import "./SearchBar.css";


export default class SearchBar extends React.Component {

    handleChange = () => {
        console.log('Hello');
    }

    render() {
        return (
            <div className="component-search-input">
                <input onChange={this.handleChange} />
            </div>
        );
    }
    
}
