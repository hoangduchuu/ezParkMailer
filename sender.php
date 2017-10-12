<?php 
	include('class.smtp.php');
	include "class.phpmailer.php"; 
	include "functions.php"; 

	$title = 'RedBean Test';
	$content = "mac dinh";
	$nTo = 'ezPark Support';
	$mTo = "huu.hoang@redbean.vn";
	$diachi = 'admin@phongnhatourist.com';

	// $title = $_POST['subject'];
	// $mTo = $_POST['email'];
	// $nTo = $_POST['name'];
	// $content = "Xin chào anh/chị: " 
	// .$nTo 
	// . ", <br />Cảm ơn bạn đã liên hệ với nội dung: <br />  <b> "
	// .$_POST['note'] . "</b><br /> <br /> Chúng tôi sẽ liên hệ trong thời gian sớm nhất ";
	$title = trim($_POST['subject']);
	$nTo = trim($_POST['name']);
	$mTo = trim($_POST['email']);

	$content = "Xin chào anh/chị: " 
	.$nTo 
	. ", <br />Cảm ơn bạn đã liên hệ ezPark với nội dung: <br />  <b> "
	.$_POST['subject'] . "</b><br /> <br /> Chúng tôi sẽ liên hệ trong thời gian sớm nhất ";

	$diachi = 'admin@phongnhatourist.com';
	$mail = sendMailZoho($title, $content, $nTo, $mTo,$diachicc='');
	if($mail==1)
	echo 'true';
	else echo 'false';
?>