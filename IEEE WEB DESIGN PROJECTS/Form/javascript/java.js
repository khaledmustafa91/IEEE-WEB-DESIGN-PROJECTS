function validateForm() {
    "use strict";
    var spans = document.getElementsByTagName("span"),
        first1 = document.form.first,
        scound = document.form.last,
        email = document.form.mail,
        password = document.form.pass,
        mobile = document.form.mob,
        gender = document.form.type;
        
    if (first1.value === "") { // First Name
        spans[0].style.visibility = "visible";
    } else {
        spans[0].style.visibility = "hidden";
    }
    if (scound.value === "") { // Last Name
        spans[1].style.visibility = "visible";
    } else {
        spans[1].style.visibility = "hidden";
    }
    if (email.value === "") { // E-Mail
        spans[2].style.visibility = "visible";
    } else {
        spans[2].style.visibility = "hidden";
    }
    if (password.value === "") { // Check Passwoord
        spans[3].style.visibility = "visible";
    } else {
        spans[3].style.visibility = "hidden";
    }
    
    if (isNaN(mobile)) { // Check Number
        spans[4].style.visibility = "visible";
    } else {
        spans[4].style.visibility = "hidden";
    }
    
}