import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import SearchForm from '../SearchForm/SearchForm';

const Checker = () => {
    const [searchValue, setSearchValue] = useState("");

    const getWeather = (search) => {
        API.getWeather(searchValue).then((res) => {
            console.log(res.data);
        })
        const informationEl = document.getElementById("informationEl");
        informationEl.append("Hello World")
    }
    
    const handleInputChange = e => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <SearchForm id="searchform"
            searchValue={searchValue}
            getWeather={getWeather}
            setSearchValue={setSearchValue}
            handleInputChange={handleInputChange}/>

            <div id="informationEl">

            </div>
        </div>
    )
}

export default Checker
