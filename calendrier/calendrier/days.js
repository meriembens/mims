const urlParams = new URLSearchParams(window.location.search);
const day = parseInt(urlParams.get('day')); // urlparams tmed les données en string nhwlhom int
const monthName = urlParams.get('month');  
const year = parseInt(urlParams.get('year')); 

const monthsMap = {
    Janvier: 0, Février: 1, Mars: 2, Avril: 3, Mai: 4, Juin: 5,
    Juillet: 6, Août: 7, Septembre: 8, Octobre: 9, Novembre: 10, Décembre: 11
};

const monthIndex = monthsMap[monthName]; 

// la date li 3bzna eliha
const date = new Date(year, monthIndex, day);


const dayNames = [
    'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
];

// taffichili les infos tae la date
document.getElementById('day').textContent = day; 
document.getElementById('month').textContent = `${monthName}`; 
document.getElementById('year').textContent = year; 
document.getElementById('weekday').textContent = dayNames[date.getDay()]; 

// fonction tgenereli swaya3
function populateHours() {
    const hoursGrid = document.getElementById('hours');
    // Define the desired hours
    const hoursList = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

    // Iterate over the custom hours list
    hoursList.forEach(hour => {
        const hourLine = document.createElement('div'); // Create a div for each hour
        hourLine.classList.add('hour-line'); // Add class for styling

        // Populate the inner HTML with the hour and other elements
        hourLine.innerHTML = `
            <div class="hour">${hour}</div>
            <div class="line"></div>
            <div class="rdvs"></div>
        `;

        // Append the created hour line to the grid
        hoursGrid.appendChild(hourLine);
    });
}


// tgeneri swaya3
populateHours();
