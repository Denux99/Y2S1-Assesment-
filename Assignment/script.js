function validate() {
    var Uname = "naveen";
    var Pwd = "a001";
    var username = document.getElementById("Uname");
    var password = document.getElementById("Pass");

    if (username.value.trim() == "" || password.value.trim() == "") {
        alert("Enter your login");
        return false;

    } else {
        if (username.value == Uname && password.value == Pwd) {
            return true;
        } else {
            alert("Login Error");
            return false;
        }

    }


}
window.addEventListener('load', function() {

    let clearbtn = document.getElementById("clear");

    clearbtn.addEventListener('click', function(e) {
        var username = document.getElementById("Uname");
        var password = document.getElementById("Pass");


        username.value = '';
        password.value = '';
    });

});
