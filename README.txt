README.txt

ref link : https://reactnativecode.com/connect-run-apps-using-localhost/

DBConfig.php file:
================================================================================================
<?php
 
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "flowers";
 
//Define your database username here.
$HostUser = "root";
 
//Define your database password here.
$HostPass = "";
 
?>

flowerlist.php file:
================================================================================================
<?php
include 'DBConfig.php';
 
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
 
$sql = "SELECT * FROM flowers_name";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>



