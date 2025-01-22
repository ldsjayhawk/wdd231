// responsive menu

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// weather
const temp = 75;
const condition = 'Clear';
const high = 85;
const low = 52;
const humidity = 34;
const sunrise = '7:30am';
const sunset = '9:59pm';

document.getElementById("temp").innerHTML = temp;
document.getElementById("condition").innerHTML = condition;
document.getElementById("high").innerHTML = high;
document.getElementById("low").innerHTML = low;
document.getElementById("humidity").innerHTML = humidity;
document.getElementById("sunrise").innerHTML = sunrise;
document.getElementById("sunset").innerHTML = sunset;

// get member data
const jsonFile = 'data/members.json';
const cards = document.querySelector('#cards');
let results = null;

async function getMemberData(jsonFile) {
    const response = await fetch(jsonFile)
    // wait for response
    if (response.ok) {
    // wait for json
        const data = await response.json();
        displayMembers(data.members);
    }
}

getMemberData(jsonFile);

// member card creator

const displayMembers = (members) => {
    members.forEach((member) => { addElement(member)
    };


function addElement(member) {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = `<h4>${member.company}</h4>
                        ${member.image}
                        <h5>EMAIL</h5><p>${member.email}</p>
                        <h5>Phone</h5><p>${member.phone}</p>
                        <h5>jsonFile</h5><p>${member.jsonFile}</p>`

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("memberCard");
    document.body.insertBefore(newDiv, currentDiv);
};


// function createMembercard(memberfilter) {
//     const membercard = document.getElementById('membercard');
//     membercard.innerHTML = '';
//     memberfilter.forEach(function (member) {
//         (member.completed === true) {
//             membercard.innerHTML +=
//                 `<div class="member">
//                 <h4>${member.company}</h4>
//                 ${member.image}
//                 <h5>EMAIL</h5><p>${member.email}</p>
//                 <h5>Phone</h5><p>${member.phone}</p>
//                 <h5>jsonFile</h5><p>${member.jsonFile}</p>
//                 </div>`
//         } 
//     });
// }

// copyright year
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

// set last modified date options
const options = {
    hour12: false,
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
};

// create last modified date variable
lastModified.innerHTML = new Date().toLocaleDateString("en-US", options);