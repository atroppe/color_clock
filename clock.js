window.onload = app;

function app() {

    var time = document.querySelector(".time");

    // define function
    function setTimeInHTML(d) {
        var m = d.getMinutes();
        var h = d.getHours();
        var s = d.getSeconds();
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        time.innerText = h + ":" + m + ":" + s;
        calibrate(h, m, s);
    }

    function calibrate(h, m, s) {
    	var r = Math.round(h/24 * 255);
    	var g = Math.round(m/60 * 255);
    	var b = Math.round(s/60 * 255);

    	document.body.style['background-color'] = "RGB("+r+", "+g+", "+b+")";
    }

    // invoke function
    setInterval(function() {
        var d = new Date();
        // where do I change that time object?
        // can I just give it a brand new time object every second?
        setTimeInHTML(d); // print that time to the HTML
    }, 1000);
}
