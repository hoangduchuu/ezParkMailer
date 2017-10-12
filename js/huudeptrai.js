$(document).ready(function() {

clickSendMail();

	
});

function mailing(){
		$("#myModal").modal('show');/* Act on the event */
		$name = $('[name="name"]').val()
		$email = $('[name="email"]').val()
		$subject = $('[name="subject"]').val()
		$note = $('[name="note"]').val()

		// alert($name + "---" + email + "=="+ $subject + "--" + $note);

		var data = $('form#contact_form').serialize();

		$.ajax({
        type : 'POST', //kiểu post
        url  : 'http://quangbinhxanh.com/mail/sender.php', //gửi dữ liệu sang trang submit.php
        data : data,
        success :  function(data)
               {                       
                    if(data == 'false')
                    {                       
                    	$("#myModal").modal('hide');/* Act on the event */
                        $("#myModalSaiHoacThieuThongtin").modal('show');
                    }else{
                        $("#myModal").modal('hide');
                        $("#myModalDone").modal('show');

                    }
               }
        });

        return false;
}
function clickSendMail(){

		$(".huu").click(function() {
		if (validate() == true) {
			mailing();
		}
		// else{
		// 	$("#myModalSaiHoacThieuThongtin").modal('show');
		// }
	});
}

function validate(){
		$name = $('[name="name"]').val();
		$email = $('[name="email"]').val();
		$subject = $('[name="subject"]').val();
		$note = $('[name="note"]').val();
		$errorsMess ="";
		if ($name == "" || $email == "" || $subject == "" || $note == "") {
			if ($name == "") {
				$errorsMess += "<b>Thiếu tên<br /></b>";
			}
			if ($email == "") {
				$errorsMess +=" <b>Thiếu Email<br /></b>";
			}
			if ($subject == "") {
				$errorsMess += " <b>Thiếu Tiêu đề ^ _ ^<br /></b>";
			}
			if ($note == "") {
				$errorsMess += " <b>Thiếu Nội dung<br /></b>";
			}

			$(".erorsContainer").html($errorsMess);
			$("#myModalSaiHoacThieuThongtin").modal('show');
			return false;

		}

		else{
			return true;
		}
}