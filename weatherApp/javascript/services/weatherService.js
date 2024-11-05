// this file is used to get data or post from server
// API service to connect with backend

const API_KEY = "8ff3b783b61261fc8bade7e97d3205fe"

// const API = "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}"


const WEATHERSERVICE = {
    getDataFromBackend : async function(cityName){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        const data = await response.json();
        console.log(data)
    }
}

export default WEATHERSERVICE;