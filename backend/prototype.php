<?php
  require '../c.php';

  if (!isset($_GET['request'])) {
    http_response_code(400);
    exit("Invalid data");
  }

  $conn = new mysqli($server, $username, $pwd, $db);

  if ($conn->connect_error) {
    die("Unexpected error");
  }

  $searchName = htmlspecialchars($_GET['request']);
  $searchName = $conn->real_escape_string($searchName);

  $query = "SELECT * FROM " . $dbTable . " WHERE username LIKE '" . $searchName . "%'";
  $res = $conn->query($query); 

  $userNameArray = [];
  while ($row = $res->fetch_assoc()) {
    $name = $row['username'];
    array_push($userNameArray, $name);
  }

  header('Content-type: application/json');
  echo json_encode($userNameArray);
  
  $conn->close();
?>