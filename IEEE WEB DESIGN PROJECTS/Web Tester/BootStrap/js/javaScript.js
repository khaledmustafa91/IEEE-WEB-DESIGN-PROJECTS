//global $, jQuery, console, alert, prompt
/*$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
*/
function validateForm() {
    "use strict";
    var spans = document.getElementsByTagName("span"),
        first1 = document.form.first,
        scound = document.form.last,
        email = document.form.mail,
        password = document.form.pass,
        mobile = document.form.mob,
        gender = document.form.type,
        check = true;
    if (first1.value === "") { // First Name
        spans[6].style.visibility = "visible";
        check = false;
    } else {
        spans[6].style.visibility = "hidden";
        check = false;
    }
    if (scound.value === "") { // Last Name
        spans[7].style.visibility = "visible";
        check = false;
    } else {
        spans[7].style.visibility = "hidden";
        check = true;
    }
    if (email.value === "") { // E-Mail
        spans[8].style.visibility = "visible";
        check = false;
    } else {
        spans[8].style.visibility = "hidden";
        check = true;
    }
    if (password.value === "") { // Check Passwoord
        spans[9].style.visibility = "visible";
        check = false;
    } else {
        spans[9].style.visibility = "hidden";
        check = true;
    }
    
    if (mobile.value === "") { // Check Number
        spans[10].style.visibility = "visible";
        check = false;
    } else {
        spans[10].style.visibility = "hidden";
        
    }

    if (check)
    {
        window.open('Test Page.html'); }
    localStorage.setItem("first" , first1);
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