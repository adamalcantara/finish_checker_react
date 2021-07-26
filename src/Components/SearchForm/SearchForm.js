import React from 'react'
import "./SearchForm.css"

const SearchForm = ({ getWeather, searchValue, handleInputChange}) => {
    return (
        <div id="searchForm">
            <input className="input" type="text" placeholder="Enter ZIP Code" value={searchValue} onChange={handleInputChange}></input>
            <button className="btn" onClick={(e) => getWeather(searchValue)}>Search</button>
        </div>
    )
}

export default SearchForm
