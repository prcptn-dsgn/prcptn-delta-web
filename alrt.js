function alrtMake(innerText) {
    var nid = getRandomString();
    var f = innerText.replace(/!p!/g, '<span class="a-i">').replace(/!ep!/g, '</span>');
    var newAlrt = '<div class="alrt-wrap" id="' + nid + '"> <div class="alrt-text">' + f + '</div></div>';
    document.getElementById("owowo").innerHTML = document.getElementById("owowo").innerHTML + newAlrt;
    var wrap = document.getElementById(nid);
    var text = wrap.firstElementChild;
    setTimeout(function () { 
        console.log(nid);
        text.classList.add("alrt-position-in");
     }, 1);
     setTimeout(function () { 
        text.classList.remove("alrt-position-in");
        setTimeout(function () { 
            wrap.parentNode.removeChild(wrap);
         }, 400);
     }, 3000);
}
function getRandomString() {
    var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*
<div class="alrt-wrap">
        <div class="alrt-text" id="E821E"><span class="alrt-important">this is important text.</span> this is normal text.</div>
    </div>

    */