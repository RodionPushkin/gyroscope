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
const watchValue = (oldValue,newValue) => {
    if(newValue + 5 > oldValue){
        return Math.floor(newValue)
    }else if(newValue - 5 < oldValue){
        return Math.floor(newValue)
    }
}


const accelerometerUpdate = (event) =>{
    let oldX = 0;
    let oldY = 0;
    let oldZ = 0;
    let X = watchValue(oldX,event.accelerationIncludingGravity.x*10);
    let Y = watchValue(oldY,event.accelerationIncludingGravity.y*10);
    let Z = watchValue(oldZ,event.accelerationIncludingGravity.z*10);
    console.log(oldX,oldY,oldZ)
    document.querySelector("#x").value = oldX;
    document.querySelector("#y").value = oldY;
    document.querySelector("#z").value = oldZ;

    // ix aY is negative, switch rotation
    if (oldY < 0) {
        oldX = -oldX - 180;
    }
    document.querySelector("#block").style.transform="rotate("+oldX+"deg)";

}
