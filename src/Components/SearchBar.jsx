import React from 'react';
import '../App.css'

function SearchBar(props) {
    return (
        <div className="searchBar">
            <input type="text" onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    props.search()
                }
            }} onChange={(e) => {
                props.setValues(e.target.value)
            }}/>
        </div>
    );
}

export default SearchBar;