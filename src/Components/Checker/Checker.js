import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import SearchForm from '../SearchForm/SearchForm';

const Checker = () => {
    const [searchValue, setSearchValue] = useState("");

    const getWeather = (search) => {
        API.findInfo(searchValue).then((res) => {
            console.log(res.data);
        })
    }
    

    return (
        <div>
            <SearchForm id="searchform"
            searchValue={searchValue}/>
        </div>
    )
}

export default Checker
