const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
let results = null;

async function getProphetData(url) {
    const response = await fetch(url)
    // wait for response
    if (response.ok) {
    // wait for json
        const data = await response.json();
        console.table(data.prophets)
        // formatData(data);
    }
}

getProphetData();

// function formatData(data){
//     results = data
//     console.table(data.prophets)
// }



// let buttonText = ''
// function createCourseCard(coursefilter) {
//     const coursecard = document.getElementById('coursecard');
//     coursecard.innerHTML = '';
//     coursefilter.forEach(function (course) {
//         if (course.completed === true) {
//             coursecard.innerHTML +=
//                 `<div class="course">
//                 <h3>${course.subject} ${course.number}</h3>
//                 </div>`
//         } else {
//             coursecard.innerHTML +=
//                 `<div class="course-false">
//                 <h3>${course.subject} ${course.number}</h3>
//                 </div>`;
//         }
//     });
// }