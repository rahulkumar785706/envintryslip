<?php
session_start();
if(!isset($_SESSION['users'])) header("location:login.php");
$_SESSION['table'] ='users';
$user = ($_SESSION['users']);

$users = include("./database/showusers.php");

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
                        <div class="column column-5">
                            <h1 class="section_header"><i class="fa fa-plus"></i>Create Users </h1>
                            <div id="userAddFormContainer">
                                <form action="./database/add.php" method="POST" class="appForm">
                                    <div class="appFormInputContainer">
                                        <label for="first_name">First Name</label>
                                        <input type="text" id="first_name" name="first_name">
                                    </div>
                                    <div class="appFormInputContainer">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" id="last_name" name="last_name">
                                    </div>
                                    <div class="appFormInputContainer">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email">
                                    </div>
                                    <div class="appFormInputContainer">
                                        <label for="password">Password</label>
                                        <input type="password" id="password" name="password">
                                    </div>
                                    
                                    <button type="Submit" class="appBtn"><i class="fa-sharp fa-solid fa-plus"></i>Add User</button>
                                </form> 
                                   <?php if(isset($_SESSION['response'])){
                                        $response_message = $_SESSION['response']['message'];
                                        $is_success = $_SESSION['response']['success'];
                                    ?>
                                    <div class="responseMessage">
                                        <p class="responseMessage <?= $is_success ?'responseMessage_success' : 'responseMessage_error'?>">
                                            <?=  $response_message?>
                                        </p>
                                    </div>
                                    <?php unset( $_SESSION['response']); }?>
                            </div>
                        </div>
                        <div class="column column-7">
                            <h1 class="section_header"><i class="fa fa-list"></i>List of Users </h1>
                            <div class="section_content">
                                <div class="users">                                    
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Created At</th>
                                                <th>Updated At</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach($users as $index => $user){?>
                                                <tr>
                                                    <td><?php echo $index + 1?></td>
                                                    <td class="firstName"><?php echo $user['first_name'];?></td>
                                                    <td class="lastName"><?php echo $user['last_name'];?></td>
                                                    <td class="email"><?php echo $user['email'];?></td>
                                                    <td><?php echo date('M d, y @ h:i:s A',strtotime($user['created_at']));?></td>
                                                    <td><?php echo date('M d, y @ h:i:s A',strtotime($user['updated_at']));?></td>
                                                    <td>
                                                        <a href="" class="updateUsers" data-userid="<?php echo $user['id'];?>"><i class="fa fa-pencil"></i>Edit</a>
                                                        <a href="" class="deleteUsers" data-userid="<?php echo $user['id'];?>" data-fname="<?php echo $user['first_name'];?>" data-lname="<?php echo $user['last_name'];?>"><i class="fa fa-trash"></i>Delete</a>
                                                    </td>
                                                </tr>
                                            <?php }?>                                            
                                        </tbody>
                                    </table>
                                    <p class="userCount"><?Php echo count($users);?>Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                                               
            </div>
        </div>    
    </div> 

<script src="./js/script.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.35.4/js/bootstrap-dialog.js"></script>
    
       <script>
        function script(){
            this.initialize = function(){
                this.registerEvents();                
            },
            this.registerEvents = function(){
                document.addEventListener('click',function(e){  
                    targetElement = e.target; 
                    classList = targetElement.classList;
                if(classList.contains('updateUsers')){
                    e.preventDefault();                     
                    firstName = targetElement.closest('tr').querySelector('td.firstName').innerHTML;
                    lastName = targetElement.closest('tr').querySelector('td.lastName').innerHTML;
                    email = targetElement.closest('tr').querySelector('td.email').innerHTML;
                    userId = targetElement.dataset.userid;                            
    
                    BootstrapDialog.confirm({
                        title:'Update'+' '+firstName+' '+lastName,
                        message:'<form>\
                                        <div class="form-group ">\
                                            <label for="firstName">First Name:</label>\
                                            <input type="text" class="form-control" id="firstName" value="'+firstName+'">\
                                        </div>\
                                        <div class="form-group">\
                                            <label for="lastName">Last Name:</label>\
                                            <input type="text" class="form-control" id="lastName" value="'+lastName+'">\
                                        </div>\
                                        <div class="form-group">\
                                            <label for="email">Email address:</label>\
                                            <input type="email" class="form-control" id="emailupdate" value="'+email+'">\
                                        </div>\
                                </form>', 
                                callback:function(isUpdate){                                                                                                         
                                    if(isUpdate){                                        
                                        $.ajax({
                                                type: "POST",
                                                url:'./database/updateuser.php',
                                                dataType:'json',
                                                data: {
                                                    userId :userId,                                                
                                                    f_name : document.getElementById('firstName').value, 
                                                    l_name : document.getElementById('lastName').value,
                                                     email : document.getElementById('emailupdate').value,
                                                },
                                                    success: function(data) {
                                                    if(data.success){
                                                        BootstrapDialog.alert({
                                                            type:BootstrapDialog.TYPE_SUCCESS,
                                                            message:data.message,
                                                            callback: function(){
                                                                location.reload();
                                                            }

                                                        });                                                    
                                                    }else{
                                                        BootstrapDialog.alert({
                                                            type:BootstrapDialog.TYPE_DANGER,
                                                            message:data.message,                                                      

                                                        });
                                                    }
                                                }
                                         });
                                    }
                                }                                
                            });              
                 }              

                if(classList.contains('deleteUsers')){
                    e.preventDefault();
                    userId = targetElement.dataset.userid;                   
                    fname = targetElement.dataset.fname;
                    lname = targetElement.dataset.lname;
                    fullName = fname +' ' + lname;

                    BootstrapDialog.confirm({
                        type: BootstrapDialog.TYPE_DANGER,
                        message :'Are you sure to delete'+' '+fullName +'?',
                        callback: function(isDelete){
                                $.ajax({
                                    type: "POST",
                                    url:'./database/deleteuser.php',
                                    dataType:'json',
                                    data: {
                                    user_id: userId,
                                    f_name:fname,
                                    l_name:lname    
                                    },
                                    success: function(data) {
                                        if(data.success){
                                            BootstrapDialog.alert({
                                                type:BootstrapDialog.TYPE_SUCCESS,
                                                message:data.message,
                                                callback: function(){
                                                    location.reload();
                                                }
                                            });                                                    
                                        }else{
                                            BootstrapDialog.alert({
                                                type:BootstrapDialog.TYPE_DANGER,
                                                message:data.message,                                                      

                                            });
                                       }
                                    }
                            });
                        }
                    });  
                }                            

                });               
            }       
        }
        var script = new script;
        script.initialize();   

    </script>   
</body>
</html>


                                          
                       



                         