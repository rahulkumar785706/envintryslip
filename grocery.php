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
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">	
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>    
    <link rel="stylesheet" href="./css/login.css">
    <link rel="stylesheet" href="./css/owl.carousel.css">
    <link rel="stylesheet" href="./css/owl.theme.css">    
    <script src="./js/jquery-1.9.1.min.js"></script>  
           
</head>
<body>    
<div id="owl-demo" class="owl-carousel owl-theme"> 
  <div class="item"><img src="./images/Weekday-1600x460-221107.webp" alt="offer"></div>
  <div class="item"><img src="./images/staples.webp" alt="price"></div>
</div>
<div class="row">
	<div class="col-md-3">
		<section class="product">
			<div class="product__photo">
				<div class="photo-container">
					<div class="photo-main">
						<div class="controls">
							<i class="material-icons">share</i>
							<i class="material-icons">favorite_border</i>
						</div>
						<img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice">
					</div>
					<div class="photo-album">
						<ul>
							<li class="action-button"><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
							<li class="action-button"><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"></li>
							<li class="action-button"><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"></li>
							<li class="action-button"><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="product__info">
				<div class="title">
					<h1>Delicious Apples</h1>
					<span>COD: 45999</span>
				</div>
				<div class="price">
					R$ <span>7.93</span>
				</div>
				<div class="variant">
					<h3>SELECT A COLOR</h3>
					<ul>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
					</ul>
				</div>
				<div class="description">
					<h3>BENEFITS</h3>
					<ul>
						<li>Apples are nutricious</li>
						<li>Apples may be good for weight loss</li>
						<li>Apples may be good for bone health</li>
						<li>They're linked to a lowest risk of diabetes</li>
					</ul>
				</div>
				<button class="buy--btn">ADD TO CART</button>
			</div>				
		</section>
	</div>
	<div class="col-md-3">
	<section class="product">
			<div class="product__photo">
				<div class="photo-container">
					<div class="photo-main">
						<div class="controls">
							<i class="material-icons">share</i>
							<i class="material-icons">favorite_border</i>
						</div>
						<img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice">
					</div>
					<div class="photo-album">
						<ul>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="product__info">
				<div class="title">
					<h1>Delicious Apples</h1>
					<span>COD: 45999</span>
				</div>
				<div class="price">
					R$ <span>7.93</span>
				</div>
				<div class="variant">
					<h3>SELECT A COLOR</h3>
					<ul>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
					</ul>
				</div>
				<div class="description">
					<h3>BENEFITS</h3>
					<ul>
						<li>Apples are nutricious</li>
						<li>Apples may be good for weight loss</li>
						<li>Apples may be good for bone health</li>
						<li>They're linked to a lowest risk of diabetes</li>
					</ul>
				</div>
				<button class="buy--btn">ADD TO CART</button>
			</div>				
		</section>		
	</div>
	<div class="col-md-3">
	<section class="product">
			<div class="product__photo">
				<div class="photo-container">
					<div class="photo-main">
						<div class="controls">
							<i class="material-icons">share</i>
							<i class="material-icons">favorite_border</i>
						</div>
						<img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice">
					</div>
					<div class="photo-album">
						<ul>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="product__info">
				<div class="title">
					<h1>Delicious Apples</h1>
					<span>COD: 45999</span>
				</div>
				<div class="price">
					R$ <span>7.93</span>
				</div>
				<div class="variant">
					<h3>SELECT A COLOR</h3>
					<ul>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
					</ul>
				</div>
				<div class="description">
					<h3>BENEFITS</h3>
					<ul>
						<li>Apples are nutricious</li>
						<li>Apples may be good for weight loss</li>
						<li>Apples may be good for bone health</li>
						<li>They're linked to a lowest risk of diabetes</li>
					</ul>
				</div>
				<button class="buy--btn">ADD TO CART</button>
			</div>				
		</section>
	</div>
	<div class="col-md-3">
	<section class="product">
			<div class="product__photo">
				<div class="photo-container">
					<div class="photo-main">
						<div class="controls">
							<i class="material-icons">share</i>
							<i class="material-icons">favorite_border</i>
						</div>
						<img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice">
					</div>
					<div class="photo-album">
						<ul>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"></li>
							<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="product__info">
				<div class="title">
					<h1>Delicious Apples</h1>
					<span>COD: 45999</span>
				</div>
				<div class="price">
					R$ <span>7.93</span>
				</div>
				<div class="variant">
					<h3>SELECT A COLOR</h3>
					<ul>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
						<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
					</ul>
				</div>
				<div class="description">
					<h3>BENEFITS</h3>
					<ul>
						<li>Apples are nutricious</li>
						<li>Apples may be good for weight loss</li>
						<li>Apples may be good for bone health</li>
						<li>They're linked to a lowest risk of diabetes</li>
					</ul>
				</div>
				<button class="buy--btn">ADD TO CART</button>
			</div>				
		</section>
	</div>
</div>
 
<script src="./js/scroll.js"></script> 
<script src="./js/owl.carousel.js"></script>   
</body>
</html>

