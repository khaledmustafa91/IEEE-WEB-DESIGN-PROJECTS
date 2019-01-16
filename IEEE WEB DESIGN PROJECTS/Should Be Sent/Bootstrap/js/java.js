function FORM() {
    "use strict";
    var spans = document.getElementsByTagName("span"),
        name = document.form.name,
        email = document.form.email,
        phone = document.form.phone;
    if(name.value == ""){
        spans[5].style.visibility = "visible";
    }
    else{
        spans[5].style.visibility = "hidden";
    }
    if(email.value == ""){
        spans[6].style.visibility = "visible";
    }
    else{
        spans[6].style.visibility = "hidden";
    }
    if(phone.value == ""){
        spans[7].style.visibility = "visible";
    }
    else{
        spans[7].style.visibility = "hidden";
    }

}
$(function () {
    'use strict';
    $('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
        });
    })
    
}
  );