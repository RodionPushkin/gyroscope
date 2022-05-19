let oldX = 0;
let oldY = 0;
let oldZ = 0;
// 85 / 90
const watchValue = (oldValue,newValue) => {
    if(newValue - oldValue > document.getElementById('index').value){

        return Math.floor(newValue)
    }else if(newValue - oldValue < document.getElementById('index').value){
        return Math.floor(newValue)
    }
}
const accelerometerUpdate = (event) =>{
    let X = watchValue(oldX,event.accelerationIncludingGravity.x*10);
    let Y = watchValue(oldY,event.accelerationIncludingGravity.y*10);
    let Z = watchValue(oldZ,event.accelerationIncludingGravity.z*10);
    console.log(oldX,oldY,oldZ)
    document.querySelector("#x").value = oldX;
    document.querySelector("#y").value = oldY;
    document.querySelector("#z").value = oldZ;
    if (oldY < 0) {
        oldX = -oldX - 180;
    }
    document.querySelector("#block").style.transform="rotate("+oldX+"deg)";
    oldX = X;
    oldY = Y;
    oldZ = Z;
}

if (window.DeviceMotionEvent == undefined) {
    document.querySelector("#acc").textContent = "NO";
    document.querySelector("#acc").className = "no";
}
else {
    document.querySelector("#acc").textContent = "YES";
    document.querySelector("#acc").className = "yes";
    window.addEventListener("devicemotion", (e)=>{accelerometerUpdate(e)}, true);
}