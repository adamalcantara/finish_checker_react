import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import SearchForm from '../SearchForm/SearchForm';

const Checker = () => {
    const [searchValue, setSearchValue] = useState("");

    const getWeather = (search) => {
        API.getWeather(searchValue).then((res) => {
            console.log(res.data);

            const informationEl = document.getElementById("informationEl");

            let humidity = res.data.main.humidity;
            console.log(humidity);
            let temp = res.data.main.temp;
            console.log(temp);
            let name = res.data.name;
            console.log(name);
        })

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
                handleInputChange={handleInputChange} />

            <div id="informationEl">

            </div>
        </div>
    )
}

export default Checker
