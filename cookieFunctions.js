
var input = document.querySelectorAll("input");
var gender = document.getElementById("female");
var btn = document.getElementById("submit");


function setCookie(key, value, d) {
    document.cookie = key + "=" + value + "; expires =" + d;
}

function getCookie(key) {
    var y = document.cookie.split(key + "=")[1].split(";")[0];
    return y;
}

var d = new Date(2023, 10, 10);

function hasCookie(key) {
    if (document.cookie.indexOf(key) != 0) { return document.cookie.includes("" + key + "="); }
    else { return document.cookie.includes(key + "="); }
}

function deleteCookie(key) {
    var x = new Date(1996, 3, 11);
    document.cookie = key + "=" + getCookie(key) + "; expires =" + x;
}

function allCookieList() {
    return document.cookie;
}

setCookie("visits", 0);

btn.addEventListener("click", function () {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var color = document.getElementById("colors");


    setCookie("name", name.value);
    setCookie("age", age.value);
    if (male.checked) {
        setCookie("gender", male.value);
    } else {
        setCookie("gender", female.value);
    }
    setCookie("color", color.value);

    window.location.reload();
    window.location.replace("./openWindow.html");

})
