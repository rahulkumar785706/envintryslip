<div class="dashboard_sidebar" id="dashboard_sidebar">
    <h3 class="dashboard_logo" id="dashboard_logo">IMS</h3>
    <div class="dashboard_sidebar_user">
        <img src="./images/man.jpeg" alt="User image" id="UserImage">
        <span><?php echo $user['first_name'].' '. $user['last_name']?></span>
    </div>
    <div class="dashboard_sidebar_menus">
        <ul class="dashboard_menu_lists">                
            <li>
                <a href="./dashboard.php"><i class="fa-solid fa-gauge"></i><span class="menuText">Dashboard</span></a>
            </li>
            <li>
                <a href="./useradd.php"><i class="fa-sharp fa-solid fa-user-plus"></i><span class="menuText">add user</span></a>
            </li>
            <li>
                <a href="./product.php"><i class="fa-sharp fa-solid fa-receipt"></i><span class="menuText">product</span></a>
            </li>
            
        </ul>
    </div>
</div>