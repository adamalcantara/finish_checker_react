import React from 'react'

const SearchForm = ({ getWeather, searchValue, handleInputChange}) => {
    return (
        <div>
            <input className="input" type="text" placeholder="Enter ZIP Code" value={searchValue} onChange={handleInputChange}></input>
            <button className="btn" onClick={(e) => getWeather(searchValue)}>Search</button>
        </div>
    )
}

export default SearchForm
