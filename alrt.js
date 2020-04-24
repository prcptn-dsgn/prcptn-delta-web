/*var a = [];
function alrtMake(innerText) {
    var nid = getRandomString();
    var f = innerText.replace(/!p!/g, '<span class="a-i">').replace(/!ep!/g, '</span>').replace(/!w!/g, '<span class="a-w">').replace(/!ew!/g, '</span>');
    var newAlrt = `<div class="alrt-wrap" onblur="console.log('owo')" id="${nid}"> <div class="alrt-text"> ${f} </div></div>`;
    document.getElementById("owowo").innerHTML = document.getElementById("owowo").innerHTML + newAlrt;
    var wrap = document.getElementById(nid);
    var text = wrap.firstElementChild;
    setTimeout(function () {
        console.log(nid);
        text.classList.add("alrt-position-in");
        a.push(nid);
        console.log(a);
    }, 1);
    alrtDel(wrap);
}
function alrtDel() {
    if (a.length != 0) {
        var d = document.getElementById(a[0]);
        setTimeout(function () {
            d.firstElementChild.classList.remove("alrt-position-in");

            setTimeout(function () {
                a.shift();
                if(a.length !=0){d.parentNode.removeChild(d)};
            }, 400);
        }, 2000);
    }
    setTimeout(function () {
        alrtDel();
    }, 200);
}
function repeat(){
    setTimeout(function () {
        repeat()
    }, 2);
    alrtDel();
}
repeat();
function getRandomString() {
    var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


<div class="alrt-wrap">
        <div class="alrt-text" id="E821E"><span class="alrt-important">this is important text.</span> this is normal text.</div>
    </div>

    */