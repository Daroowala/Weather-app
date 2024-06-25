const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_image = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const discription = document.querySelector(".discription");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city){
    const api_key = "18593d4828b0ea842043e21126c16d53";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round (weather_data.main.temp - 273.15)}C°`;
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
   
});