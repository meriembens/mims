// Initialisation de Flatpickr pour le calendrier
flatpickr("#appointmentDate", {
    enableTime: false, // Only date selection allowed
    locale: {fr,
        firstDayOfWeek: 0 // Start the week on Saturday
    }, // Set French locale for French month and day names
    dateFormat: "l d F Y", // Full date format (Day Month Year)
    minDate: "today", // Disable past dates
    disable: [
      function(date) {
        return date.getDay() === 5 || date.getDay() === 6; // Disable Fridays (5) and Saturdays (6)
      }
    ],
    firstDayOfWeek: 6, // Start the week on Sunday
    onChange: function(selectedDates, dateStr, instance) {
      // Check if a date is selected and show/hide the message accordingly
      const noDateMessage = document.getElementById("no-date-message");
      if (selectedDates.length === 0) {
        noDateMessage.style.display = "block"; // Show the message if no date is selected
      } else {
        noDateMessage.style.display = "none"; // Hide the message if a date is selected
      }
    },
    onReady: () => {
      // Check the initial state when Flatpickr is ready
      const noDateMessage = document.getElementById("no-date-message");
      noDateMessage.style.display = "block"; // Show message initially
    }
  });

  const doctorSpecialties = {
    "consultation": ["Dr Keciour Nesma", "Dr Belhedid Ibtissem", "Dr Bensalah Meriem", "Dr Guerroumi Lynda", "Dr Bouchetara Ryane"],
    "blanchiment": ["Dr Keciour Nesma", "Dr Belhedid Ibtissem", "Dr Bensalah Meriem"],
    "detartrage": ["Dr Keciour Nesma", "Dr Belhedid Ibtissem", "Dr Guerroumi Lynda"],
    "orthodontie": ["Dr Keciour Nesma", "Dr Bensalah Meriem", "Dr Bouchetara Ryane"],
    "soin": ["Dr Belhedid Ibtissem", "Dr Bensalah Meriem", "Dr Guerroumi Lynda"],
    "implant": ["Dr Bensalah Meriem", "Dr Guerroumi Lynda", "Dr Bouchetara Ryane"],
    "endodontie": ["Dr Bensalah Meriem", "Dr Guerroumi Lynda"],
    "protheses": ["Dr Bensalah Meriem", "Dr Guerroumi Lynda", "Dr Bouchetara Ryane"]
};

  // Function to update doctor options based on the selected motif
  function updateDoctorsBasedOnMotif() {
    const motif = document.getElementById('motif').value; // Get the selected motif
    const doctorSelect = document.getElementById('nom_docteur'); // Get the doctor select dropdown
  
    // Clear the current doctor options
    doctorSelect.innerHTML = '<option value="" disabled selected>Choisir un médecin</option>';
  
    // Check if there are doctors available for the selected motif
    if (motif && doctorSpecialties[motif]) {
      const doctors = doctorSpecialties[motif];
  
      // Loop through the doctors and add them to the dropdown
      doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor; // Set the value to the doctor's name
        option.textContent = doctor; // Display the doctor's name
        doctorSelect.appendChild(option); // Add the option to the select
      });
    }
  }
  
  // Attach the change event listener to the motif dropdown
  document.getElementById('motif').addEventListener('change', updateDoctorsBasedOnMotif);
  
  // Call the function once to populate the doctors on page load (in case a motif is pre-selected)
  updateDoctorsBasedOnMotif();
  
// Fonction pour générer les créneaux horaires
function generateTimeSlots() {
    const timeSlots = document.querySelector(".slots");
    timeSlots.innerHTML = ""; // Effacer les créneaux précédents

    // Créneaux horaires disponibles
    const times = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00"];

    // Création des boutons pour chaque créneau
    times.forEach((time) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = time;

        // Ajouter un événement de clic pour mettre en surbrillance le créneau sélectionné
        button.addEventListener("click", () => {
            document.querySelectorAll(".slots button").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });

        timeSlots.appendChild(button);
    });
}

// Ajout de l'événement au changement de date
document.getElementById("appointmentDate").addEventListener("change", generateTimeSlots);
