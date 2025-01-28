// import statements
import { apiFetch } from "./weather.mjs";
import { forecastFetch } from "./forecast.mjs";
import { copyrightYear, lastModifiedDate } from "./footer.mjs";
// import { hamburgerMenu } from "./menu.mjs";

// hamburgerMenu();

// weather
apiFetch();
forecastFetch();

// footer info
copyrightYear();
lastModifiedDate();

// responsive menu
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});
