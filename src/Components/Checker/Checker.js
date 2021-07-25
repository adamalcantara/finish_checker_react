import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import SearchForm from '../SearchForm/SearchForm';

const Checker = () => {
    const [searchValue, setSearchValue] = useState("");


    //Function to get weather by Zip Code from search box
    const getWeather = (search) => {
        //Get informationEL from the page
        const informationEl = document.getElementById("informationEl");
        
        //Set informationEl to blank
        informationEl.innerHTML = "";
        API.getWeather(searchValue).then((res) => {
            console.log(res.data);

            

            let humidity = res.data.main.humidity;
            console.log(humidity);
            let temp = res.data.main.temp;
            console.log(temp);
            let name = res.data.name;
            console.log(name);

            let cityNameEl = document.createElement("h2");
            cityNameEl.append(name);
            informationEl.append(cityNameEl);

            //Create div for the lacquer
            let lacquerDiv = document.createElement("div")
            lacquerDiv.classList.add("lacquerDiv")

            //Create a div for the title, and append the title to that div, then append it to the page
            let lacquerTitle = document.createElement("h3")
            lacquerTitle.classList.add("lacquerTitle")
            lacquerTitle.append("Nitrocellulose Lacquer")
            lacquerDiv.append(lacquerTitle)

            //Create div for lacquer information
            let lacquerEl = document.createElement("div");
            lacquerEl.classList.add("lacquerEl")

            //if statement for appending items to the page
            if (humidity < 65 && temp < 90) {
                lacquerEl.classList.add("lacquerGood");
                lacquerEl.append("Go Ahead");
            } else {
                lacquerEl.classList.add("lacquerBad");
                lacquerEl.append("Don't you dare");
            }

            //Append lacquerEl to lacquerDiv
            lacquerDiv.append(lacquerEl);

            //Append the information to the page
            informationEl.append(lacquerDiv);
        })

    }

    function currentLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported")
        }
    }

    function showPosition(position) {
        
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
