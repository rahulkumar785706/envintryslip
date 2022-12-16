
<?php
session_start();
$conn = include("./database/connection.php");
// try {
//     $conn = new PDO("mysql:host=$servername;dbname=inventory", $username, $password);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $stmt = $conn->prepare("SELECT * FROM items");
//     $stmt->execute();   
//     $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);  
   
// }
// catch(PDOException $e) {
//     echo "Error: " . $e->getMessage();
// }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <div id="dashboardMianContainer">
        <?php include("./partials/appsidebar.php");?>
        <div class="dashboard_content_container" id="dashboard_content_container">
            <?php include("./partials/apptopnav.php");?>
            <div class="dashboard_content">
                <div class="dashboard_content_main">
                    <div class="row">                       
                        <div class="column column">
                            <h1 class="section_header"><i class="fa fa-list"></i>  List of Items </h1>
                            <div class="section_content">
                                <div class="users">                                    
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Thumbnail</th>
                                                <th>Name</th>
                                                <th>Summery</th>
                                                <th>Category</th>
                                                <th>Size</th>
                                                <th>Color</th>
                                                <th>Rating</th>
                                                <th>price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php while($row = $result->fetchAll()){?> 
                                                <tr>
                                                    <td><?php echo $row['name'];?></td>
                                                </tr>
                                             <?php }?>                                                                                                                            
                                        </tbody>
                                    </table>                                   
                                </div>
                            </div>
                        </div'c'>
                    </div'r'>
                </div>                                         
            </div>
        </div>            
    </div"main">

<script src="./js/script.js"></script>
</body>
</html>

