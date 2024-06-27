const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_image = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const discription = document.querySelector(".discription");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const feels_like = document.querySelector(".feels-like")
const location_not_found = document.querySelector(".location-not-found")
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city){
    const api_key = "18593d4828b0ea842043e21126c16d53";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === '404'){
        location_not_found.style.display="flex";
        weather_body.style.display = "none" 
        return;
    }

    location_not_found.style.display="none";
    weather_body.style.display = "flex" 
    console.log(weather_data)
    temperature.innerHTML = `${Math.round (weather_data.main.temp - 273.15)}C°`;
    discription.innerHTML = weather_data.weather[0].main;
    humidity.innerHTML = `${(weather_data.main.humidity)}%`;
    wind_speed.innerHTML = `${(weather_data.wind.speed)}Km/h`;
    feels_like.innerHTML = `Feels like ${Math.round (weather_data.main.feels_like - 273.15)}° `;

    switch (weather_data.weather[0].main){
        case 'Clear':
            weather_image.src = "images/clear.png";
            break;
        case 'Clouds':
            weather_image.src = "images/cloud.png";
            break;
        case 'Rain':
            weather_image.src = "images/weather-rain-weather-forecast-icon-meteorological-sign-3d-render-png.webp";
            break;
        case 'Mist':
            weather_image.src = "images/Mist.webp";
            break;
        case 'Snow':
            weather_image.src = "images/Snow.jpeg";
            break;
        case 'Smoke':
            weather_image.src = "images/smoke.webp";
            break;
        case 'Heavy Rain':
            weather_image.src = "images/heavy rain.avif";
            break;
        case 'Haze':
            weather_image.src = "images/haze.jpeg";  
            
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
    console.log(weather_data)
});