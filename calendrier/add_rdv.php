<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
// Enable error reporting for debugging (disable in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include the database connection file
include "connect.php"; // Database connection

// Check if the form was submitted
if (isset($_POST["submit"])) {
    // Retrieve form data safely
    $prenom_patient = $conn->real_escape_string($_POST['prenom_patient']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $nom_patient = $conn->real_escape_string($_POST['nom_patient']);
    $nom_docteur = $conn->real_escape_string($_POST['nom_docteur']);
    $date = $conn->real_escape_string($_POST['date']);
    $time = $conn->real_escape_string($_POST['time']);
    $motif = $conn->real_escape_string($_POST['motif']);

    // Prepare the SQL statement to insert the appointment data
    $sql_insert = $conn->prepare("INSERT INTO appointments (nom_patient, prenom_patient, nom_docteur, date, heure, motif) 
                                  VALUES (?, ?, ?, ?, ?, ?)");

    // Bind the parameters to the prepared statement
    $sql_insert->bind_param("ssssss", $nom_patient,
     $prenom_patient, $nom_docteur, $date, $time, $motif);


    // Execute the prepared statement and check for success
    if ($sql_insert->execute()) {
        echo "Rendez-vous réservé avec succès !";  // Success message
    } else {
        // Log the error to the server and show a generic message to the user
        error_log("Error executing query: " . $sql_insert->error);
        echo "Erreur lors de la réservation du rendez-vous. Veuillez réessayer plus tard.";
    }

    // Close the prepared statement
    $sql_insert->close();
}

// Close the database connection
$conn->close();
?>