import { copyrightYear, lastModifiedDate } from "./footer.mjs";

// responsive menu
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// variables for grid - list toggle
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const jsonFile = 'data/members.json';
let data = [];

const membercard = document.querySelector("membercard");

// get data from the json file
export async function apiFetch(jsonfile) {
    try {
        const response = await fetch(jsonfile);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            return data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log("Error retreiving data", error);
            }
    }

function displayGrid(data) {
    data.forEach(member =>  {
        membercard.innerHTML = "";
        const divElement = document.createElement("div")
        divElement.classList.add("member")
        // `<div class="member">
        `<h3>${member.company}</h3>
        <img src="${member.image}" alt="company logo" width="100" height="auto"> 
        <h4>Address: ${member.address}</h4>
        <h4>Phone: ${member.phone}</h4>
        <h4>${member.url}</h4>
        </div>`;
        membercard.appendChild(divElement);
    });
}

function displayList(data) {
    const table = document.createElement("table")
    data.forEach(member =>  {
        const row = document.createElement("tr")
        row.innerHTML =
        `<div class="member">
        <table>
            <tr>
                <td><h4>${member.company}</h4></td><td><p>Address: ${member.address}</p></td><td><p>Phone: ${member.phone}</p></td><td><p>${member.url}</p></td>
            </tr>
        </table>
        </div>`
        table.appendChild(row);
        },
    );
    membercard.appendChild(table);
}

// when clicking the button, go to the correct function
grid.addEventListener("click", () => {
	membercard.classList.add("grid");
	membercard.classList.remove("list");
    displayGrid(data);
});

list.addEventListener("click", () => {
	membercard.classList.add("list");
	membercard.classList.remove("grid");
    displayList(data);
});
    

// footer info ---------------
copyrightYear();
lastModifiedDate();