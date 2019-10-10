<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Patient
  (patientGuid, firstName, lastName, DOB, sexAtBirth)
  VALUES (?,?,?,?,?)'
);

$stmt->execute([
  $_POST['patientGuid'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['DOB'],
  $_POST['sexAtBirth'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
