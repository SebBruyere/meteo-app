import React from 'react';
import "./SearchBar.css";

function SearchBar (props) {
    return (
        <div className="component-search-input">
            <input onKeyDown={props.keydown} />
        </div>
    );
}

export default SearchBar;
