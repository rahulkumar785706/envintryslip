<?php
session_start();
if(isset($_SESSION['users'])) header("location:dashboard.php");
$error_message="";
if($_POST){   
    include("./database/connection.php");
    $Username = $_POST['Username'];
    $password = $_POST['password'];

   $query = ' SELECT * FROM users WHERE users.email="'.$Username.'" AND users.password="'.$password.'" ';
   $stmt = $conn->prepare($query);
   $stmt->execute();

  
   if($stmt->rowCount()>0){
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $user = $stmt->fetchAll()[0];

    $_SESSION['users'] = $user;
    header('location:dashboard.php');

   }else{
    $error_message = 'Please make sure that username and password are not correct.';
   }    
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>inventoryslip</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="./css/login.css">
</head>
<body id="loginBody">
    <?php if(!empty($error_message)){?>
        <div id="errorMessage">
            <strong>Error:</strong><p><?php echo($error_message); ?></p>
        </div>
    <?php }?>
    <div class="container">
        <div class="loginHeader">
            <h1>IMS</h1>
            <p>Inventory Management System</p>
        </div>
        <div class="loginBody">
            <form action="login.php" method="POST">
                <div class="loginInputsContainer">
                    <label for="">Username:</label>
                    <input type="text" name="Username" placeholder="Username">
                </div>
                <div class="loginInputsContainer">
                    <label for="">Password:</label>
                    <input type="password" name="password" placeholder="password">
                </div>
                <div class="loginButtonContainer">
                    <button>login</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>