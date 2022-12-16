<?php
session_start();
if(!isset($_SESSION['users'])) header("location:login.php");
$user=($_SESSION['users']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <div id="dashboardMianContainer">
    <?php include("./partials/appsidebar.php");?>
        <div class="dashboard_content_container" id="dashboard_content_container">
            <?php include("./partials/apptopnav.php");?>
            <div class="dashboard_content">
                <div class="dashboard_content_main"></div>
                <div class="groceryContainer">
                    <h1>Grocery Item</h1>
                </div>                         
            </div>
        </div>            
    </div"main">

    <script src="./js/script.js"></script>
</body>
</html>