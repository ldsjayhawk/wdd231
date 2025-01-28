// import statements
// import { apiFetch } from "./weather.mjs";
// import { forecastFetch } from "./forecast.mjs";
import { copyrightYear, lastModifiedDate } from "./footer.mjs";
// import { hamburgerMenu } from "./menu.mjs";


// get member data
const jsonFile = 'data/members.json';
const membercard = document.getElementById('membercard');
let memberdata = [];

async function getMemberData(jsonFile) {
    try {
        const response = await fetch(jsonFile)
        // wait for response
        if (response.ok) {
            // wait for json
            const data = await response.json();
            console.log(data)
            memberdata = data;
            displayMembers(memberdata, "grid");
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log("Error retreiving data", error);
        }
}

function displayMembers(data) {
    data.forEach(member =>  {
        membercard.innerHTML +=             
        `<div class="member">
        <h3>${member.company}</h3>
        <img src="${member.image}" alt="company logo" width="100" height="auto">
        <h4>Email: ${member.email}</p>
        <h4>Phone: ${member.phone}</p>
        <h4>${member.url}</p>
        </div>`
        } 
    );
}

const grid = document.querySelector("#grid");
grid.addEventListener("click", () => {
    displayMembers(memberdata, "grid"); 
});

const list = document.querySelector("#list");
list.addEventListener("click", () => {
    displayMembers(memberdata, "list"); 
});

getMemberData(jsonFile);
// footer info
copyrightYear();
lastModifiedDate();