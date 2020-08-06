import React from 'react';
import './SearchBox.css';

export const SearchBox = ({placeholder, handleChange} ) => {
    return (
        <div>
            <input type="search" placeholder={placeholder} className="search" onChange={handleChange}/>
        </div>
    );
}