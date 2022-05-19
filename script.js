let oldX = 0;
let oldY = 0;
let oldZ = 0;
const watchValue = (oldValue,newValue) => {
    newValue = Math.floor(newValue)
    if(newValue - oldValue == 0){
        return oldValue
    }else if(newValue - oldValue >= document.getElementById('index').value || newValue - oldValue <= document.getElementById('index').value * -1){
        console.log(`oldValue: ${oldValue}, newValue: ${newValue}, ${newValue - oldValue}`)
        return newValue
    }
    return oldValue
}
const accelerometerUpdate = (event) =>{
    let X = watchValue(oldX,event.accelerationIncludingGravity.x*10);
    let Y = watchValue(oldY,event.accelerationIncludingGravity.y*10);
    let Z = watchValue(oldZ,event.accelerationIncludingGravity.z*10);
    oldX = X;
    oldY = Y;
    oldZ = Z;
    document.querySelector("#x").value = oldX;
    document.querySelector("#y").value = oldY;
    document.querySelector("#z").value = oldZ;
    if (oldY < 0) {
        oldX = -oldX - 180;
    }
    document.querySelector(".container").style.transform="rotateX("+(-oldX)+"deg)";
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