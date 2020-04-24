var mode = "light";
mode = getCookie("mode");
function get_cookies_array() {

    var cookies = {};

    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    return cookies;

}
var val = [
];
var nam = [
];
function refreshCookies() {
    val = [];
    nam = [];
    var cookies = get_cookies_array();

    for (var name in cookies) {
        val.push(cookies[name]);
        nam.push(name);
    }
    console.log(val);
    console.log(nam);
}
refreshCookies();

function load() {
    document.getElementById("main").innerHTML = document.getElementById("defaultCont").innerHTML;
    for (let i = 0; i < val.length; i++) {
        const code = val[i];
        const name = nam[i];
        if (code.length == 30) {

            var h1 = "#" + code.substring(0, 6);
            var h2 = "#" + code.substring(6, 12);
            var h3 = "#" + code.substring(12, 18);
            var h4 = "#" + code.substring(18, 24);
            var h5 = "#" + code.substring(24, 30);
            var url = h1.substring(1, 7) + h2.substring(1, 7) + h3.substring(1, 7) + h4.substring(1, 7) + h5.substring(1, 7);
            createDiv(h1, h2, h3, h4, h5, url, name);
            console.log(code);
        }
    }
    getScrollX()

    updateMode();

}
function createDiv(h1, h2, h3, h4, h5, url, name) {

    document.getElementById("main").innerHTML =
        `<div class="group"><i class="fas fa-times delete" onclick="deleteCookie(' ${name} ')" style="color:${getContrast(h5)}"></i><a href="/#${url}"><div class="color" style="background: ${h1}
        ;"></div><div class="color" style="background: ${h2}
        ;"></div><div class="color" style="background: ${h3}
        ;"></div><div class="color" style="background: ${h4}
        ;"></div><div class="color" style="background: ${h5}
        ;"></div></a></div>` +
        document.getElementById("main").innerHTML;
}

function deleteCookie(name) {
    document.cookie = name + "= 0";
    refreshCookies();
    load();
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    refreshCookies();
    load();
}
if (getCookie("mode") == null) {
    document.cookie = 'mode = light';
}
mode = getCookie("mode");
function switchMode() {
    if (mode == "light") {
        mode = "dark";
        updateMode();
        document.cookie = 'mode = dark';

    } else if (mode == "dark") {
        mode = "light";
        updateMode();
        document.cookie = 'mode = light';

    }
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
function updateMode() {
    if (mode == "light") {

        document.documentElement.style.setProperty('--bgc', '#363636d0');
        document.documentElement.style.setProperty('--col', 'white');
        document.documentElement.style.setProperty('--bg', '#160f1d');

    } else if (mode == "dark") {
        document.documentElement.style.setProperty('--bgc', '#ebebebd0');
        document.documentElement.style.setProperty('--col', '#808080');
        document.documentElement.style.setProperty('--bg', 'white');
        
    }
}
function getScrollX() {
    var scroll = window.scrollY;
    var goalVH = scroll / window.innerHeight * 100 + 36;
    document.getElementById("settings").style.top = goalVH + "vh";
}
var getContrast = function (hexcolor) {

    // If a leading # is provided, remove it ===
    if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolor.slice(1);
    }

    // If a three-character hexcode, make six-character
    if (hexcolor.length === 3) {
        hexcolor = hexcolor.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }

    // Convert to RGB value
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);

    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // Check contrast
    return (yiq >= 128) ? 'black' : 'white';

};
function refreshPalettes() {
    refreshCookies();
    load();
}
setTimeout(function () { document.body.style.transition = "background 0.4s, color 0.4s" }, 1000);
console.log(document.cookie);

tippy('[data-tippy-content]', {

    arrow: true,
    delay: [500, 0],
    inertia: true,
    placement: 'right',
    theme: 'delta',
    animation: 'rotate',
    arrowType: 'roundArrow'
});
