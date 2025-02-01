// import statements
import { apiFetch } from "./weather.mjs";
import { forecastFetch } from "./forecast.mjs";
import { copyrightYear, lastModifiedDate } from "./footer.mjs";
// import { hamburgerMenu } from "./menu.mjs";

// hamburgerMenu();
// responsive menu
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// weather
apiFetch();
forecastFetch();

// footer info
copyrightYear();
lastModifiedDate();

// const jsonFile = 'data/members.json';
// const membercard = document.getElementById('membercard');
// let memberdata = [];

// async function getMemberData(jsonFile) {
//     try {
//         const response = await fetch(jsonFile)
//         // wait for response
//         if (response.ok) {
//             // wait for json
//             const data = await response.json();
//             console.log(data)
//             memberdata = data;
//             displayMembers(memberdata, "grid");
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//             console.log("Error retreiving data", error);
//         }
// }

// function displayMembers(data) {
//     for (let i = 0; i < 3; i++) {
        
//         data.forEach(member =>  {
//             if (member.membership > 1){
//             membercard.innerHTML +=             
//             `<div class="member">
//             <h3>${member.company}</h3>
//             <img src="${member.image}" alt="company logo" width="100" height="auto">
//             <h4>Address: ${member.address}</h4>
//             <h4>Phone: ${member.phone}</h4>
//             <h4>${member.url}</h4>
//             </div>`
//             Math.random()
//         }
//         } 
//     );
// }
// }

// // const grid = document.querySelector("#grid");
// // grid.addEventListener("click", () => {
// //     displayMembers(memberdata, "grid"); 
// // });

// getMemberData(jsonFile);
