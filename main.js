var mode = "light";
var checked = false;
var faved = false;
var hDif = {
    c1: 0,
    c2: 0,
    c4: 0,
    c5: 0
};

var lDif = {
    c1: 0,
    c2: 0,
    c4: 0,
    c5: 0
};

var sDif = {
    c1: 0,
    c2: 0,
    c4: 0,
    c5: 0
};
function getCols() {
    if (checked == false) {
        var colorI1 = document.getElementById("col1");
        var colorI2 = document.getElementById("col2");
        var colorI3 = document.getElementById("col3");
        var colorI4 = document.getElementById("col4");
        var colorI5 = document.getElementById("col5");

        var colorHSL1 = hexToHSL(colorI1.value);
        var colorHSL2 = hexToHSL(colorI2.value);
        var colorHSL3 = hexToHSL(colorI3.value);
        var colorHSL4 = hexToHSL(colorI4.value);
        var colorHSL5 = hexToHSL(colorI5.value);
        var hueDiffs = {
            c1: colorHSL1.h - colorHSL3.h,
            c2: colorHSL2.h - colorHSL3.h,
            c4: colorHSL4.h - colorHSL3.h,
            c5: colorHSL5.h - colorHSL3.h
        };
        var satDiffs = {
            c1: colorHSL1.s - colorHSL3.s,
            c2: colorHSL2.s - colorHSL3.s,
            c4: colorHSL4.s - colorHSL3.s,
            c5: colorHSL5.s - colorHSL3.s
        };
        var lumDiffs = {
            c1: colorHSL1.l - colorHSL3.l,
            c2: colorHSL2.l - colorHSL3.l,
            c4: colorHSL4.l - colorHSL3.l,
            c5: colorHSL5.l - colorHSL3.l
        };
        hDif = hueDiffs;
        sDif = satDiffs;
        lDif = lumDiffs;
        console.log(hueDiffs);
        console.log(satDiffs);
        console.log(lumDiffs);

    }
    swatchUpdate();
}

function setCols() {
    if (checked == true) {

        var colorI1 = document.getElementById("col1");
        var colorI2 = document.getElementById("col2");
        var colorI3 = document.getElementById("col3");
        var colorI4 = document.getElementById("col4");
        var colorI5 = document.getElementById("col5");

        var colorHSL1 = hexToHSL(colorI1.value);
        var colorHSL2 = hexToHSL(colorI2.value);
        var colorHSL3 = hexToHSL(colorI3.value);
        var colorHSL4 = hexToHSL(colorI4.value);
        var colorHSL5 = hexToHSL(colorI5.value);
        var col1 = {
            h: colorHSL3.h + hDif.c1,
            s: colorHSL3.s + sDif.c1,
            l: colorHSL3.l + lDif.c1
        }
        if (col1.h < 0) {
            col1.h = 360 + col1.h;
        } else if (col1.h > 360) {
            col1.h = col1.h - 360;
        } else if (col1.s < 0) {
            col1.s = 0;
        } else if (col1.s > 100) {
            col1.s = 100;
        } else if (col1.l < 0) {
            col1.l = 0;
        } else if (col1.l > 100) {
            col1.l = 100;
        }
        col1new = HSLToHex(col1.h, col1.s, col1.l);
        colorI1.value = col1new;

        console.log(col1);

        var col2 = {
            h: colorHSL3.h + hDif.c2,
            s: colorHSL3.s + sDif.c2,
            l: colorHSL3.l + lDif.c2
        }
        if (col2.h < 0) {
            col2.h = 360 + col2.h;
        } else if (col2.h > 360) {
            col2.h = col2.h - 360;
        } else if (col2.s < 0) {
            col2.s = 0;
        } else if (col2.s > 100) {
            col2.s = 100;
        } else if (col2.l < 0) {
            col2.l = 0;
        } else if (col2.l > 100) {
            col2.l = 100;
        }
        col2new = HSLToHex(col2.h, col2.s, col2.l);
        colorI2.value = col2new;

        console.log(col2);

        var col4 = {
            h: colorHSL3.h + hDif.c4,
            s: colorHSL3.s + sDif.c4,
            l: colorHSL3.l + lDif.c4
        }
        if (col4.h < 0) {
            col4.h = 360 + col4.h;
        } else if (col4.h > 360) {
            col4.h = col4.h - 360;
        } else if (col4.s < 0) {
            col4.s = 0;
        } else if (col4.s > 100) {
            col4.s = 100;
        } else if (col4.l < 0) {
            col4.l = 0;
        } else if (col4.l > 100) {
            col4.l = 100;
        }
        col4new = HSLToHex(col4.h, col4.s, col4.l);
        colorI4.value = col4new;

        console.log(col4);

        var col5 = {
            h: colorHSL3.h + hDif.c5,
            s: colorHSL3.s + sDif.c5,
            l: colorHSL3.l + lDif.c5
        }
        if (col5.h < 0) {
            col5.h = 360 + col5.h;
        } else if (col5.h > 360) {
            col5.h = col5.h - 360;
        } else if (col5.s < 0) {
            col5.s = 0;
        } else if (col5.s > 100) {
            col5.s = 100;
        } else if (col5.l < 0) {
            col5.l = 0;
        } else if (col5.l > 100) {
            col5.l = 100;
        }
        col5new = HSLToHex(col5.h, col5.s, col5.l);
        colorI5.value = col5new;

        console.log(col5);

    } else {
        getCols();
    }
}

function check() {
    var cI1 = document.getElementById("col1");
    var cI2 = document.getElementById("col2");
    var cI4 = document.getElementById("col4");
    var cI5 = document.getElementById("col5");

    var wI1 = document.getElementById("wrap1");
    var wI2 = document.getElementById("wrap2");
    var wI4 = document.getElementById("wrap4");
    var wI5 = document.getElementById("wrap5");

    var lockIcon = document.getElementById("lockIcon");

    var tI1 = document.getElementById("tex1");
    var tI2 = document.getElementById("tex2");
    var tI4 = document.getElementById("tex4");
    var tI5 = document.getElementById("tex5");

    if (checked == false) {
        lockIcon.classList.replace("fa-lock-open", "fa-lock");
        lockIcon.classList.add("pos-down");
        checked = true;
        console.log("checled owow");
        cI1.disabled = true;
        cI2.disabled = true;
        cI4.disabled = true;
        cI5.disabled = true;
        tI1.disabled = true;
        tI2.disabled = true;
        tI4.disabled = true;
        tI5.disabled = true;

        wI1.classList.remove("hovfx");
        wI2.classList.remove("hovfx");
        wI4.classList.remove("hovfx");
        wI5.classList.remove("hovfx");
        setTimeout(function () {
            lockIcon.classList.remove("pos-down");
        }, 100);
    } else {
        lockIcon.classList.replace("fa-lock", "fa-lock-open");
        lockIcon.classList.add("pos-down");
        checked = false;
        console.log("unchecled owow");
        cI1.disabled = false;
        cI2.disabled = false;
        cI4.disabled = false;
        cI5.disabled = false;
        tI1.disabled = false;
        tI2.disabled = false;
        tI4.disabled = false;
        tI5.disabled = false;

        wI1.classList.add("hovfx");
        wI2.classList.add("hovfx");
        wI4.classList.add("hovfx");
        wI5.classList.add("hovfx");
        setTimeout(function () {
            lockIcon.classList.remove("pos-down");
        }, 100);
    }


}


function swatchUpdate() {
    var colorI1 = document.getElementById("col1");
    var colorI2 = document.getElementById("col2");
    var colorI3 = document.getElementById("col3");
    var colorI4 = document.getElementById("col4");
    var colorI5 = document.getElementById("col5");

    var wrap1 = document.getElementById("wrap1");
    var wrap2 = document.getElementById("wrap2");
    var wrap3 = document.getElementById("wrap3");
    var wrap4 = document.getElementById("wrap4");
    var wrap5 = document.getElementById("wrap5");

    document.getElementById("tex1").value = colorI1.value;
    document.getElementById("tex2").value = colorI2.value;
    document.getElementById("tex3").value = colorI3.value;
    document.getElementById("tex4").value = colorI4.value;
    document.getElementById("tex5").value = colorI5.value;
    wrap1.style.backgroundColor = colorI1.value;
    wrap2.style.backgroundColor = colorI2.value;
    wrap3.style.backgroundColor = colorI3.value;
    wrap4.style.backgroundColor = colorI4.value;
    wrap5.style.backgroundColor = colorI5.value;
}

function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    //return "hsl(" + h + "," + s + "%," + l + "%)";
    return {
        h: h,
        s: s,
        l: l
    }
}

function rand() {

    if (checked == false) {
        var colorI1 = document.getElementById("col1");
        var colorI2 = document.getElementById("col2");
        var colorI3 = document.getElementById("col3");
        var colorI4 = document.getElementById("col4");
        var colorI5 = document.getElementById("col5");

        colorI1.value = getRandomColor();
        colorI2.value = getRandomColor();
        colorI3.value = getRandomColor();
        colorI4.value = getRandomColor();
        colorI5.value = getRandomColor();

        getCols();
        randIcon.classList.add("pos-down");
        setTimeout(function () {
            randIcon.classList.remove("pos-down");
        }, 100);
    } else {
        var colorI3 = document.getElementById("col3");
        colorI3.value = getRandomColor();

        setCols();
        swatchUpdate();
        randIcon.classList.add("pos-down");
        setTimeout(function () {
            randIcon.classList.remove("pos-down");
        }, 100);
    }
}

function HSLToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomString() {
    var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hexUpdate(n) {
    var tex = document.getElementById("tex" + n).value;
    var colorI = document.getElementById("col" + n);
    if (tex.length == 6) {
        tex = "#" + tex;
        colorI.value = tex;
        getCols();
    } else if (tex.length == 7) {
        colorI.value = tex;
        getCols();
    }

}

// function you can use:
function getID(str) {
    var string = str.split('#')[1];
    console.log(string);
    if (string != undefined) {
        return {
            c1: string.substring(0, 6),
            c2: string.substring(6, 12),
            c3: string.substring(12, 18),
            c4: string.substring(18, 24),
            c5: string.substring(24, 30),
        };
    } else {
        return null;
    }
}
// use the function:


function load() {
    var hex = getID(window.location.href);
    console.log(hex);
    var colorI1 = document.getElementById("col1");
    var colorI2 = document.getElementById("col2");
    var colorI3 = document.getElementById("col3");
    var colorI4 = document.getElementById("col4");
    var colorI5 = document.getElementById("col5");
    if (hex != null) {
        colorI1.value = "#" + hex.c1;
        colorI2.value = "#" + hex.c2;
        colorI3.value = "#" + hex.c3;
        colorI4.value = "#" + hex.c4;
        colorI5.value = "#" + hex.c5;
    }
    getCols();
    updateMode();
}
function copyUrl() {
    var cI1 = document.getElementById("col1").value.substring(1, 7);
    var cI2 = document.getElementById("col2").value.substring(1, 7);
    var cI3 = document.getElementById("col3").value.substring(1, 7);
    var cI4 = document.getElementById("col4").value.substring(1, 7);
    var cI5 = document.getElementById("col5").value.substring(1, 7);
    var text = "http://prcptn.us/delta/#" + cI1 + cI2 + cI3 + cI4 + cI5;
    copy(text);

    var linkIcon = document.getElementById("linkIcon");
    linkIcon.classList.add("pos-down");

    window.location.href = text;

    setTimeout(function () {
        linkIcon.classList.remove("pos-down");
    }, 100);
}

function copy(value) {
    var input_temp = document.createElement("input");
    input_temp.value = value;
    document.body.appendChild(input_temp);
    input_temp.select();
    document.execCommand("copy");
    document.body.removeChild(input_temp);
};
function copyCss() {
    var cI1 = document.getElementById("col1").value;
    var cI2 = document.getElementById("col2").value;
    var cI3 = document.getElementById("col3").value;
    var cI4 = document.getElementById("col4").value;
    var cI5 = document.getElementById("col5").value;
    var text = "/* Usage: 'color: var(--1)' */ :root { --c1:" + cI1 + "; --c2:" + cI2 + "; --c3:" + cI3 + "; --c4:" + cI4 + "; --c5:" + cI5 + ";}";
    copy(text);

    var cssIcon = document.getElementById("cssIcon");
    cssIcon.classList.add("pos-down");
    setTimeout(function () {
        cssIcon.classList.remove("pos-down");
    }, 100);
}
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
var arr = [
];
function refreshCookies(){
    var cookies = get_cookies_array();
    
    for (var name in cookies) {
        arr.push(cookies[name]);
    }
    arr.shift();
    arr.pop();
    console.log(arr);
}
refreshCookies();

function favPalette() {
    var cI1 = document.getElementById("col1").value.substring(1, 7);
    var cI2 = document.getElementById("col2").value.substring(1, 7);
    var cI3 = document.getElementById("col3").value.substring(1, 7);
    var cI4 = document.getElementById("col4").value.substring(1, 7);
    var cI5 = document.getElementById("col5").value.substring(1, 7);
    var newCookie = cI1 + cI2 + cI3 + cI4 + cI5;
    document.cookie = getRandomString() + "=" +  newCookie;
    arr.push(newCookie);
    console.log(arr);
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
if(getCookie("mode") == null){
    document.cookie = 'mode = light';
}
console.log(document.cookie);
mode = getCookie("mode");
function switchMode(){
    if (mode == "light") {
        mode = "dark";
        updateMode();
        document.cookie = 'mode = dark';

    } else if (mode == "dark") {
        mode = "light";
        updateMode();
        document.cookie = 'mode = light';

    }
    console.log(document.cookie);
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
function updateMode(){
    if (mode == "light") {

        document.documentElement.style.setProperty('--bgc', '#363636d0');
        document.documentElement.style.setProperty('--col', 'white');
        document.documentElement.style.setProperty('--bg', '#160f1d');
        document.getElementById("sunIcon").classList.replace("fa-moon", "fa-sun");

    } else if (mode == "dark") {
        document.documentElement.style.setProperty('--bgc', '#ebebebd0');
        document.documentElement.style.setProperty('--col', '#808080');
        document.documentElement.style.setProperty('--bg', 'white');
        document.getElementById("sunIcon").classList.replace("fa-sun", "fa-moon");

    }
}
setTimeout(function(){ document.body.style.transition = "background 0.4s, color 0.4s" }, 1000);