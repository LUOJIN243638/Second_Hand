var inp = document.querySelector('.inp');
var message = document.querySelector('.message');
var inpsw = document.querySelector('.inpsw');
var pswmessage = document.querySelector('.pswmessage');


inp.onblur = function () {
    if (this.value.length != 11) {
        message.className = 'message wrong';
        message.innerHTML = "the phone number length is not right !"
    } else {
        message.className = 'message right';
        message.innerHTML = "the phone number length is right !";
    }
}  

inpsw.onblur = function () {
    if (this.value.length != 11) {
        pswmessage.className = 'message wrong';
        pswmessage.innerHTML = "the password length is not right !"
    } else {
        pswmessage.className = 'message right';
        pswmessage.innerHTML = "it's okay!";
    }
}  
 