if (window.DeviceMotionEvent == undefined) {
    //No accelerometer is present. Use buttons.
    document.querySelector("#acc").textContent = "NO";
    document.querySelector("#acc").className = "no";

}
else {
    document.querySelector("#acc").textContent = "YES";
    document.querySelector("#acc").className = "yes";
    window.addEventListener("devicemotion", accelerometerUpdate, true);
}


function accelerometerUpdate(event) {
    var aX = event.accelerationIncludingGravity.x*10;
    var aY = event.accelerationIncludingGravity.y*10;
    var aZ = event.accelerationIncludingGravity.z*10;

    document.querySelector("#x").value = aX;
    document.querySelector("#y").value = aY;
    document.querySelector("#z").value = aZ;

    // ix aY is negative, switch rotation
    if (aY <0) {
        aX = -aX - 180;
    }
    document.querySelector("#block").style.transform="rotate("+aX+"deg)";

}
