// import { apiFetch } from "./fetch.mjs";

const currentTemp = document.querySelector('#current-temp');
const highTemp = document.querySelector('#high');
const today = document.querySelector('#today-temp');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
// const sunrise = document.querySelector('#sunrise');
// const sunset = document.querySelector('#sunset');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.928&lon=-94.690&appid=995719e2f16a6f13c875fdaadddc9b71&units=imperial';

export async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
            return data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
                console.log(error);
            }
    }

// function convertTimestamp (timestamp) {
//     const date = new Date(timestamp * 1000); // Convert to milliseconds
// }



function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}`
    highTemp.innerHTML = `High Temp: ${Math.round(data.main.temp_max)}`
    today.innerHTML = `${Math.round(data.main.temp_max)}`
    lowTemp.innerHTML = `Low Temp: ${Math.round(data.main.temp_min)}`
    humidity.innerHTML = `Humidity: ${data.main.humidity}`
    // sunrise.innerHTML = `Sunrise: ${data.sys.sunrise}`
    // sunset.innerHTML = `Sunset: ${data.sys.sunset}`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    description.innerHTML = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}
