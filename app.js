const inputBox = document.getElementsByClassName("input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_image = document.getElementsByClassName("weather-image");
const temperature = document.getElementsByClassName("temperature");
const discription = document.getElementsByClassName("discription");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city){
    const apiKey = '18593d4828b0ea842043e21126c16d53';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_date = await fetch(`${url}`).then(response=>response.json());

    temperature.innerHTML = `${weather_data.main.temp}`;
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});