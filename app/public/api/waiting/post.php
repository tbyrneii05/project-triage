<?php
//step 0:
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('INSERT INTO PatientVisit(patientGuid, visitDescription, priority) VALUES(?,?,?)');

$stmt->execute
([$_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']]);

//step 4 Output

header('HTTP/1.1 303 See Other');
header('Location:.../waiting/');
