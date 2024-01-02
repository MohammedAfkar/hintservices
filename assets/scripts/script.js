var url = "https://wa.me/61434033654?text=";

function send() {
    var msg = url +
        "Hi, Hint services";
    window.open(msg, '_blank').focus();
}

/*
function sendMail() {

    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        message: document.getElementById('message').value
    }

    var serviceID = "#";
    var templateID = "#";
    
    emailjs.send(serviceID, templateID, params).then(alert("Thank you for choosing HINT SERVICES! Your request has been received, an email confirming your booking details will arrive shortly. If you have any immediate queries, feel free to reach out. Have a wonderful day!"));
}*/
