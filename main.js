var mode = "light";
var checked = false;
var faved = false;
var exportO = false;
var cLocked = {
    col1: false,
    col2: false,
    col3: false,
    col4: false,
    col5: false,
}
var cols = {
    col1: "#ffe3d7",
    col2: "#FF9F8C",
    col3: "#FF5C5C",
    col4: "#870E48",
    col5: "#4a1e49",
}
var colorI1;
var colorI2;
var colorI3;
var colorI4;
var colorI5;
var w1;
var w2;
var w3;
var w4;
var w5;
function load() {
    var hex = getID(window.location.href);
    if (hex != null) {
        cols.col1 = "#" + hex.c1;
        cols.col2 = "#" + hex.c2;
        cols.col3 = "#" + hex.c3;
        cols.col4 = "#" + hex.c4;
        cols.col5 = "#" + hex.c5;
    }
    updateSwatches();
    updateMode();
}
function updateSwatches() {
    q.get("#col1").childNodes[1].style.background = cols.col1;
    q.get("#col2").childNodes[1].style.background = cols.col2;
    q.get("#col3").childNodes[1].style.background = cols.col3;
    q.get("#col4").childNodes[1].style.background = cols.col4;
    q.get("#col5").childNodes[1].style.background = cols.col5;
    q.get("#tex1").value = cols.col1;
    q.get("#tex2").value = cols.col2;
    q.get("#tex3").value = cols.col3;
    q.get("#tex4").value = cols.col4;
    q.get("#tex5").value = cols.col5;
    q.get("#lockIcon1").style.color = getContrast(cols.col1);
    q.get("#lockIcon2").style.color = getContrast(cols.col2);
    q.get("#lockIcon3").style.color = getContrast(cols.col3);
    q.get("#lockIcon4").style.color = getContrast(cols.col4);
    q.get("#lockIcon5").style.color = getContrast(cols.col5);
    addUndo()
    resetRedo()
    updateRUColors()
}
function updateWOundo() {
    q.get("#col1").childNodes[1].style.background = cols.col1;
    q.get("#col2").childNodes[1].style.background = cols.col2;
    q.get("#col3").childNodes[1].style.background = cols.col3;
    q.get("#col4").childNodes[1].style.background = cols.col4;
    q.get("#col5").childNodes[1].style.background = cols.col5;
    q.get("#tex1").value = cols.col1;
    q.get("#tex2").value = cols.col2;
    q.get("#tex3").value = cols.col3;
    q.get("#tex4").value = cols.col4;
    q.get("#tex5").value = cols.col5;
    q.get("#lockIcon1").style.color = getContrast(cols.col1);
    q.get("#lockIcon2").style.color = getContrast(cols.col2);
    q.get("#lockIcon3").style.color = getContrast(cols.col3);
    q.get("#lockIcon4").style.color = getContrast(cols.col4);
    q.get("#lockIcon5").style.color = getContrast(cols.col5);
    updateRUColors()
}

function check() {


    var dynIcon = q.get("#dynIcon");

    if (checked == false) {
        dynIcon.style.color = "#0abeff";
        checked = true;
    } else {
        dynIcon.style.color = "var(--col)";
        checked = false;
    }


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

        if (cLocked.col1 == false) cols.col1 = getRandomColor();
        if (cLocked.col2 == false) cols.col2 = getRandomColor();
        if (cLocked.col3 == false) cols.col3 = getRandomColor();
        if (cLocked.col4 == false) cols.col4 = getRandomColor();
        if (cLocked.col5 == false) cols.col5 = getRandomColor();

        updateSwatches()
    } else {
        setColors([getRandomInt(360) + 1, getRandomInt(100) + 1, getRandomInt(100) + 1], `col${getRandomInt(5) + 1}`)
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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
    var tex = q.get(`#tex${n}`).value;
    if (tex.startsWith("#") == false) tex = "#" + tex;
    if (/^#([0-9A-F]{3}){1,2}$/i.test(tex)) {
        cols[`col${n}`] = tex
    }
    updateSwatches();
}

// function you can use:
function getID(str) {
    var string = str.split('#')[1];
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


function copyUrl() {
    var cI1 = cols.col1.substring(1, 7);
    var cI2 = cols.col2.substring(1, 7);
    var cI3 = cols.col3.substring(1, 7);
    var cI4 = cols.col4.substring(1, 7);
    var cI5 = cols.col5.substring(1, 7);
    var text = `${window.location.protocol}//${window.location.hostname}/#` + cI1 + cI2 + cI3 + cI4 + cI5;
    copy(text);

    var linkIcon = document.getElementById("linkIcon");
    linkIcon.classList.add("pos-down");

    window.location.href = text;

    setTimeout(function () {
        linkIcon.classList.remove("pos-down");
    }, 100);

    alert("url copied successfully!");
}

function copy(value) {
    var input_temp = document.createElement("input");
    input_temp.value = value;
    document.body.appendChild(input_temp);
    input_temp.select();
    document.execCommand("copy");
    document.body.removeChild(input_temp);
};
function createSmartPalette() {
    var url = "http://colormind.io/api/";
    var c1 = hexToRgb(cols.col1);
    var c2 = hexToRgb(cols.col2);
    var c3 = hexToRgb(cols.col3);
    var c4 = hexToRgb(cols.col4);
    var c5 = hexToRgb(cols.col5);
    var input = [];
    if(cLocked.col1)input.push([c1.r,c1.g,c1.b]); else input.push("N")
    if(cLocked.col2)input.push([c2.r,c2.g,c2.b]); else input.push("N")
    if(cLocked.col3)input.push([c3.r,c3.g,c3.b]); else input.push("N")
    if(cLocked.col4)input.push([c4.r,c4.g,c4.b]); else input.push("N")
    if(cLocked.col5)input.push([c5.r,c5.g,c5.b]); else input.push("N")
    var data = {
        model: "default"
    }
    data.input = input;

    var http = new XMLHttpRequest();
    var palette;
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            palette = JSON.parse(http.responseText).result;
            cols = {
                col1:RGBToHex(palette[0][0],palette[0][1],palette[0][2]),
                col2:RGBToHex(palette[1][0],palette[1][1],palette[1][2]),
                col3:RGBToHex(palette[2][0],palette[2][1],palette[2][2]),
                col4:RGBToHex(palette[3][0],palette[3][1],palette[3][2]),
                col5:RGBToHex(palette[4][0],palette[4][1],palette[4][2]),
            }
            updateSwatches()
        }
    }
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}

function copyCss() {
    var cI1 = cols.col1;
    var cI2 = cols.col2;
    var cI3 = cols.col3;
    var cI4 = cols.col4;
    var cI5 = cols.col5;
    var text = "/* Usage: 'color: var(--c1)' */ :root { --c1:" + cI1 + "; --c2:" + cI2 + "; --c3:" + cI3 + "; --c4:" + cI4 + "; --c5:" + cI5 + ";}";
    copy(text);

    var cssIcon = document.getElementById("cssIcon");
    cssIcon.classList.add("pos-down");
    setTimeout(function () {
        cssIcon.classList.remove("pos-down");
    }, 100);
    alert("css copied successfully!");
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
function refreshCookies() {
    var cookies = get_cookies_array();

    for (var name in cookies) {
        arr.push(cookies[name]);
    }
    arr.shift();
    arr.pop();
}
refreshCookies();

function favPalette() {
    var cI1 = cols.col1.substring(1, 7);
    var cI2 = cols.col2.substring(1, 7);
    var cI3 = cols.col3.substring(1, 7);
    var cI4 = cols.col4.substring(1, 7);
    var cI5 = cols.col5.substring(1, 7);
    var newCookie = cI1 + cI2 + cI3 + cI4 + cI5;
    document.cookie = getRandomString() + "=" + newCookie;
    arr.push(newCookie);

    alert("palette favorited");
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
        document.documentElement.style.setProperty('--abg', 'white');
    } else if (mode == "dark") {
        document.documentElement.style.setProperty('--bgc', '#ebebebd0');
        document.documentElement.style.setProperty('--col', '#808080');
        document.documentElement.style.setProperty('--bg', 'white');

        document.documentElement.style.setProperty('--abg', '#160f1d');

    }
}
setTimeout(function () { document.body.style.transition = "background 0.4s, color 0.4s" }, 1000);
tippy('[data-tippy-content]', {

    arrow: true,
    delay: [500, 0],
    inertia: true,
    placement: 'bottom',
    theme: 'delta',
    animation: 'rotate',
    arrowType: 'roundArrow'
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

function lockSwatch(swatchNum) {
    var lockIcon = q.get(`#lockIcon${swatchNum}`);
    var text = q.get(`#tex${swatchNum}`);
    if (cLocked[`col${swatchNum}`]) {
        cLocked[`col${swatchNum}`] = false;
        lockIcon.classList.replace("fa-lock", "fa-lock-open");
        text.disabled = false
    } else {
        cLocked[`col${swatchNum}`] = true;
        lockIcon.classList.replace("fa-lock-open", "fa-lock");
        text.disabled = true
    }
}
function getContrast(hexcolor) {

    // If a leading # is provided, remove it
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
function exportOpen() {

    if (exportO == false) {
        document.getElementById("extras-wrap").innerHTML = '<div class="export-wrap export-wrap-in" id="export-wrap"> <div class="export-element fadeIn-0s" onclick="exportFile(`hex`);"><i class="fas fa-hashtag"></i><h1>hex</h1> </div><div class="export-element fadeIn-01s" onclick="exportFile(`rgb`);"><i class="fas fa-tint"></i><h1>rgb</h1> </div><div class="export-element fadeIn-02s " onclick="exportFile(`css`);"><i class="fas fa-file-code"></i><h1>css</h1> </div><div class="export-element fadeIn-03s" onclick="exportFile(`png`);"><i class="fas fa-file-image"></i><h1>png</h1> </div></div>';
        document.getElementById("extras-wrap").classList.add("extras-wrap-in");
        exportO = true;
        document.getElementById("exportIcon").classList.add("negPoint4vh");
        document.getElementById("exportDownIcon").classList.add("downIcon-vis");
    } else {
        exportClose();
    }
}
function exportClose() {
    document.getElementById("export-wrap").classList.remove("export-wrap-in");
    document.getElementById("export-wrap").classList.add("export-wrap-out");
    document.getElementById("extras-wrap").classList.remove("extras-wrap-in");
    document.getElementById("exportIcon").classList.remove("negPoint4vh");
    document.getElementById("exportDownIcon").classList.remove("downIcon-vis");
    exportO = false;
    setTimeout(() => {
        document.getElementById("extras-wrap").innerHTML = '';
    }, 350);
}
function exportFile(format) {
    var url = window.location.href;
    var params = url.slice(url.indexOf('#') + '#'.length);

    console.log(params);
    params = params.split('-');
    console.log(params);

    var colors = decodeURIComponent(params[0]).match(/.{1,6}/g);
    var name = decodeURIComponent(params[2]);

    if (name == "undefined")
        name = 'Color Palette'

    console.log('Format: ' + format);
    console.log('Colors: ' + colors.join(' '));
    console.log('Name: ' + name);

    switch (format) {
        case 'txt':
        case 'hex':
        case 'rgb':
            exporter.exportTextFile(colors, colors.join('-'));
            break;
        case 'css':
        case 'scss':
            exporter.exportStylesheet(format, colors, colors.join('-'));
            break;
        case 'png':
        case 'jpeg':
            exporter.exportImage(format, colors, colors.join('-'));
    }
}
function openTint(e) {
    var id = e.parentElement.id;
    var hsl = hexToHSL(cols[id])
    var locked = cLocked[id]
    if (locked == false) {
        tint.open(`hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`);
    } else {
        id = ""
    }
    window.addEventListener('tintdone', e => {
        color = tint.get().replace("hsl(", "").replace(")", "").replace(/%/g, "").split(",");
        setColors(color, id)
        tint.close()
        id = ""
    });
}
function setColors(h, e) {
    if (checked) {
        var oldHsl = hexToHSL(cols[e]);
        var diff = {
            h: `${h[0] - oldHsl.h}`,
            s: `${h[1] - oldHsl.s}`,
            l: `${h[2] - oldHsl.l}`,
        }

        for (let i = 0; i < Object.keys(cols).length; i++) {
            var hsl = hexToHSL(cols[`col${i + 1}`])
            var newH = parseInt(hsl.h, 10) + parseInt(diff.h, 10);
            var newS = parseInt(hsl.s, 10) + parseInt(diff.s, 10);
            var newL = parseInt(hsl.l, 10) + parseInt(diff.l, 10);
            if (newH > 360) newH -= 360;
            if (newH < 0) newH += 360;
            if (newS > 100) newS = 100;
            if (newS < 0) newS = 0;
            if (newL > 100) newL = 100;
            if (newL < 0) newL = 0;

            if (cLocked[`col${i + 1}`] == false) {
                cols[`col${i + 1}`] = HSLToHex(newH, newS, newL)
            }
        }
    } else {
        var hex = HSLToHex(h[0], h[1], h[2])
        cols[e] = hex;
    }
    updateSwatches()
}
var undo = []
var cur = "6";
var redo = []

function undoSwatch() {
    if (undo.length > 0) {
        redo.push(pack(cols))

        undo.pop()
        cols = {
            col1: undo[undo.length - 1][0],
            col2: undo[undo.length - 1][1],
            col3: undo[undo.length - 1][2],
            col4: undo[undo.length - 1][3],
            col5: undo[undo.length - 1][4],
        }
    }
    updateWOundo()
    updateRUColors()
}
function redoSwatch() {
    if (redo.length > 0) {
        undo.push(cols)
        cols = {
            col1: redo[redo.length - 1][0],
            col2: redo[redo.length - 1][1],
            col3: redo[redo.length - 1][2],
            col4: redo[redo.length - 1][3],
            col5: redo[redo.length - 1][4],
        }
        redo.pop()
    }
    updateWOundo()
    updateRUColors()
}
function addUndo() {
    undo.push(pack(cols))
    updateRUColors()
}
function resetRedo() {
    redo = []
    updateRUColors()
}
var pack = function (arr) {
    var length = Object.keys(arr).length,
        result = [],
        i;

    for (i = 0; i < length; i++) {
        result.push(arr[`col${i + 1}`]);
    }

    return result;
};
var sidebarOpen = false;
function sidebar() {
    if (sidebarOpen == false) {
        var oI = q.get("#openIcon").firstChild
        oI.classList.add("rotate180")
        var sett = q.get(".settings")
        sett.classList.remove("settings-hidden")
        sidebarOpen = true;
    } else if (sidebarOpen) {
        var oI = q.get("#openIcon").firstChild
        oI.classList.remove("rotate180")
        var sett = q.get(".settings")
        sett.classList.add("settings-hidden")
        sidebarOpen = false
    }
}
function updateRUColors(){
    if(undo.length == 0)q.get("#undoIcon").style.opacity = "20%";
    if(redo.length == 0)q.get("#redoIcon").style.opacity = "20%";
    if(undo.length != 0)q.get("#undoIcon").style.opacity = "100%";
    if(redo.length != 0)q.get("#redoIcon").style.opacity = "100%";
}