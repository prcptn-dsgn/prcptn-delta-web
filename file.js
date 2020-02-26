function download() {
    var d = new Date();
    var text = getCookiesString();
    var filename = "db_" + (d.getMonth() + 1) +"_"+ d.getDate()+"_" + d.getFullYear() + ".delta";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}
var openFile = function (event) {
    var p = [];
    var input = event.target;
    console.log(document.getElementById('input').value.substring(12, 1000));
    var reader = new FileReader();
    reader.onload = function () {

        var text = reader.result.substring(18, reader.result.length);
        var node = document.getElementById('output');
        for (let i = 1; i < reader.result.length / 30; i++) {

            p.push(reader.result.substring(30 * (i - 1), 30 * (i)));

        }
        console.log(p);
        for (let i = 0; i < p.length; i++) {
            const newCookie = p[i];
            document.cookie = getRandomString() + "=" + newCookie;
        }
        //window.location.href = 'index.html#' + text;
    };
    reader.readAsText(input.files[0]);
};
function getRandomNum() {
    var letters = '0123456789';
    var color = '';
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

function getCookiesString() {
    var arr = [
    ];
    var str = "";
    var cookies = get_cookies_array();

    for (var name in cookies) {

        if (cookies[name].length == 30) { arr.push(cookies[name]); }
    }
    for (let i = 0; i < arr.length; i++) {
        const cookie = arr[i];
        str = str + cookie;
    }
    return str;
}
getCookiesString();