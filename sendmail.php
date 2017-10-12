<?php
	//goi thu vien
	include('class.smtp.php');
	include "class.phpmailer.php"; 
	include "functions.php"; 
	$title = 'RedBean Test';
	$content = 'XIn chao xin chao hihi.';
	$nTo = 'ezPark Support';
	$mTo = 'huu.hoang@redbean.vn';
	$diachi = 'hoangduchuuvn.images@gmail.com';
	//test gui mail
	$mail = sendMail($title, $content, $nTo, $mTo,$diachicc='');
	if($mail==1)
	echo 'mail của bạn đã được gửi đi hãy kiếm tra hộp thư đến để xem kết quả. ';
	else echo 'Co loi!';
?>