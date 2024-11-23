const calendarGrid = document.getElementById("grid"); // hia l grid li f html

const monthNames = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// affichi le mois w l'année actuels
document.getElementById("month").innerHTML = monthNames[currentMonth];
document.getElementById("year").innerHTML = currentYear;

// function taffichili le moi w l'année mor changement
function updateMonthYearDisplay() {
  document.getElementById("month").innerHTML = monthNames[currentMonth];
  document.getElementById("year").innerHTML = currentYear;
}

function updateCalendar() {
  // tretournili le premier jour du mois
  let firstDay = new Date(currentYear, currentMonth, 1).getDay();
  
  // tretournili le dernier jour du mois
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
  // tvidi l calendrier 9bel ma ytbdl le mois
  calendarGrid.innerHTML = "";  

  // les jours vides 9bel ma yebda chehar
  for (let i = 0; i <= firstDay; i++) {
    calendarGrid.innerHTML += `<div class="day empty"></div>`; // Fix: Added template literal here
  }

  // ajouter les jours 1,2,3...
  for (let day = 1; day <= daysInMonth; day++) {
    const dayGrid = document.createElement("div"); // pour chaque jour tcriyi div
    dayGrid.classList.add("day"); // pour chaque div nmdolha class day
    dayGrid.innerText = day; // pour chaque div naffichiw le jour

    // Calculate the day of the week for the current day
    const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();

    // samdi w vendredi nmdolhom class unclickable
    if (dayOfWeek === 5 || dayOfWeek === 6) {  // 5 = vendredi, 6 = Saturday
      dayGrid.classList.add("unclickable");  // Add "unclickable" class to weekends
    } else {
      // Add click event for weekdays (non-weekends)
      dayGrid.addEventListener("click", function () {
        window.location.href = `days.html?day=${day}&month=${monthNames[currentMonth]}&year=${currentYear}`; // Fix: Added backticks for template literal
      });
    }

    // Highlight the current day
    const today = new Date();
    if (
      day === today.getDate() && 
      currentMonth === today.getMonth() && 
      currentYear === today.getFullYear()
    ) {
      dayGrid.classList.add("current-day");  // nmedo une classe l nhar lyoum
    }

    // Set a custom attribute for the day
    dayGrid.setAttribute("data-day", day);

    // Append the day div to the calendar grid
    calendarGrid.appendChild(dayGrid);  
  }
}

// changement tae les mois
function changeMonth(i) {
  currentMonth += i;

  // ida janvier w zedna habtna taffichi decembre w tn9s 3am
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  // ida decembre w zdna tala3na taffichi janvier w tzid 3am
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  // les fonctions li ybdlo chehar w yaffichiweh
  updateMonthYearDisplay(); 
  updateCalendar(); 
}

// Initial load of the calendar
updateCalendar();
