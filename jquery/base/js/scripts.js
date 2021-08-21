$(document).ready(function() {
    $("input[type='password']").on("keyup", function() {
        var password = $(".password-input");
        var passwordConfirm = $(".password-confirm");
        var message = $(".message");
        setTimeout(function(){
            if (password.val() === passwordConfirm.val()) {
                passwordConfirm.addClass("ok").removeClass("error");
                message.html("Пароли совпадают");
            } else {
                passwordConfirm.addClass("error").removeClass("ok");
                message.html("Пароли не совпадают");
            }
        }, 500); 
    });
});