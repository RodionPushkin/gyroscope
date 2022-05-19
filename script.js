let oldX = 0;
let oldY = 0;
let oldZ = 0;
const watchValue = (oldValue,newValue) => {
    newValue = Math.floor(newValue)
    if(newValue - oldValue == 0){
        return oldValue
    }else if(newValue - oldValue >= 10 || newValue - oldValue <= 10 * -1){
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
    document.querySelector(".container").style.transform="rotateY("+(-oldX)+"deg) rotateX("+(-oldY)+"deg)";
}

if (window.DeviceMotionEvent != undefined) {
    window.addEventListener("devicemotion", (e)=>{accelerometerUpdate(e)}, true);
}