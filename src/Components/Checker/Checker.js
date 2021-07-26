import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import SearchForm from '../SearchForm/SearchForm';
import "./Checker.css"

const Checker = () => {
    // const [searchValue, setSearchValue] = useState("");

    // let searchBtn = document.getElementById("searchBtn");

    // searchBtn.addEventListener("click", searchValue);

    function searchValue() {
        let searchValue = document.querySelector("#searchBox").value;
        console.log(searchValue);

        if (searchValue =="") {
            alert("Please input a search term");
            return false
        }

        getWeather(searchValue);

        document.querySelector("#searchBox").value = "";
    }

    //Function to get weather by Zip Code from search box
    function getWeather(searchValue) {
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
                lacquerEl.append("Don't You Dare");
            }

            //Append lacquerEl to lacquerDiv
            lacquerDiv.append(lacquerEl);

            //Append the information to the page
            informationEl.append(lacquerDiv);
        })

    }

    function currentLocation() {
        console.log("getting current location")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported")
        }
    }

    function showPosition(position) {
        //Get informationEL from the page
        const informationEl = document.getElementById("informationEl");

        //Set informationEl to blank
        informationEl.innerHTML = "";

        //Set informationEl to nothing, then make an API call
        API.geoWeather(position).then((res) => {
            console.log(res.data);

            //get the names and temperatures for the position from the geolocation
            let positionName = res.data.list[0].name;
            console.log(positionName);
            let positionTemp = res.data.list[0].main.temp;
            console.log(positionTemp);
            let positionHum = res.data.list[0].main.humidity;
            console.log(positionHum);

            let positionNameEl = document.createElement("h2");
            positionNameEl.append(positionName);
            informationEl.append(positionNameEl);

            //Create div for the lacquer
            let positionLacquerDiv = document.createElement("div")
            positionLacquerDiv.classList.add("lacquerDiv")

            //Create a div for the title, and append the title to that div, then append it to the page
            let positionLacquerTitle = document.createElement("h3")
            positionLacquerTitle.classList.add("lacquerTitle")
            positionLacquerTitle.append("Nitrocellulose Lacquer")
            positionLacquerDiv.append(positionLacquerTitle)

            //Create div for lacquer information
            let positionLacquerEl = document.createElement("div");
            positionLacquerEl.classList.add("lacquerEl")

            //if statement for appending items to the page
            if (positionHum < 65 && positionTemp < 90) {
                positionLacquerEl.classList.add("lacquerGood");
                positionLacquerEl.append("Go Ahead");
            } else {
                positionLacquerEl.classList.add("lacquerBad");
                positionLacquerEl.append("Don't You Dare");
            }

            //Append lacquerEl to lacquerDiv
            positionLacquerDiv.append(positionLacquerEl);

            //Append the information to the page
            informationEl.append(positionLacquerDiv);
        })
    }

    // const handleInputChange = e => {
    //     setSearchValue(e.target.value);
    // }

    currentLocation();

    return (
        <div className="checker">
            <div id="search">
                <input id="searchBox" className="input" placeholder="Enter ZIP Code"></input>
                <button id="searchBtn" className="btn" onClick={searchValue}>Search</button>
            </div>

            <div id="informationEl">

            </div>
        </div>
    )
}

export default Checker
