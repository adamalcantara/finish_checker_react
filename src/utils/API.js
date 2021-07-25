import axios from "axios";
require('dotenv').config()

const apiKey = process.env.REACT_APP_API_KEY;

export default {
    //Get weather from the open weather API.
    getWeather: function (searchValue) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?zip=" + searchValue + "&appid=" + apiKey + "&units=imperial")
    }
}