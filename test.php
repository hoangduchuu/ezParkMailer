<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="test.php" method="POST">
		<input type="text" name="mail" id="mail" placeholder="nhập email của bạn"> <br />
		<input type="text" name="name" id="name" placeholder="your name"> <br />
		<textarea rows="4" cols="50" name="content" id="content" placeholder="nhập nội dung của bạn" ></textarea>	<br />	<input type="submit" name="submit" id="submit"> 
	</form>
<?php 
	include('class.smtp.php');
	include "class.phpmailer.php"; 
	include "functions.php"; 

	$title = 'RedBean Test';
	$content = "mac dinh";
	$nTo = 'ezPark Support';
	$mTo = "huu.hoang@redbean.vn";
	$diachi = 'admin@phongnhatourist.com.com';
if (isset($_POST['submit'])) {

	$mTo = $_POST['mail'];
	$nTo = $_POST['name'];
	$content = "Xin chào anh/chị: " 
	.$nTo 
	. ", <br />Cảm ơn bạn đã liên hệ với nội dung: <br />  <b> "
	.$_POST['content'] . "</b><br /> <br /> Chúng tôi sẽ liên hệ trong thời gian sớm nhất ";
	$mail = sendMailZoho($title, $content, $nTo, $mTo,$diachicc='');
	if($mail==1)
	echo 'true';
	else echo 'false';
}
//goi thu vien
	// include('class.smtp.php');
	// include "class.phpmailer.php"; 
	// include "functions.php"; 
	// $title = 'RedBean Test';
	// $content = 'XIn chao xin chao hihi.';
	// $nTo = 'ezPark Support';
	// $mTo = 'huu.hoang@redbean.vn';
	// $diachi = 'hoangduchuuvn.images@gmail.com';

	//test gui mail


 ?>
</body>
</html>