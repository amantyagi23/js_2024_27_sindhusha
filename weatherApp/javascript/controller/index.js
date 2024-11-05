import WEATHERSERVICE from "../services/weatherService.js";

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    console.log("Working till here")
   WEATHERSERVICE.getDataFromBackend("new york")
   console.log("Working till here part 2")
   
}