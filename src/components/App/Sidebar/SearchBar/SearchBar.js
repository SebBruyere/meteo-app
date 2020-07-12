import React from 'react';
import "./SearchBar.css";


function SearchBar (props) {
    return (
        <div className="component-search-input">
            <input onKeyDown={props.keydown} placeholder="Enter a city..." />
            <button className="" name="button" onClick={props.handleClick} >&#10003;</button>
        </div>
    );
}

export default SearchBar;
