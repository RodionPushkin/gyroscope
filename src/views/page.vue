<template>
  <div class="page xl">
    <p ref="xcord">x</p>
    <p ref="ycord">y</p>
    <p ref="zcord">z</p>
    <p ref="latitude">latitude</p>
    <p ref="longitude">longitude</p>
    <a href="https://codepen.io/lehollandaisvolant/pen/prgZyB">sdfsdfs</a>
    <!-- <button class="button" @click="toggleFullScreen">fullscreen</button> -->
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted(){
    
    // this.geoposition()
    // window.addEventListener("devicemotion", this.da, true);
    window.ondeviceorientation = (event)=>{
      console.log(event);
      console.log('sdfsdfsf');
    }
    // var nodeAG = document.querySelector('.page');
    // var maxAG = 0;
    // function onMotionChange(e) {
    //   // покажем значения параметров в реальном времени
    //   var ag = e.accelerationIncludingGravity;
    //   nodeAG.innerHTML = '';
    //   for(var i in ag){
    //       nodeAG.innerHTML += i + ' = ' + ag[i].toFixed(2) + '</br>';
    //       if(Math.abs(maxAG) < Math.abs(ag[i])){
    //         maxAG = ag[i];
    //       }
    //   }
    //   nodeAG.innerHTML += '<strong>MAX = '+maxAG.toFixed(2)+'</strong></br>';
    //   if(ag.x > ag.y && ag.x > ag.z){ nodeAG.innerHTML += '<span>Горизонтально перед собой</span>';}
    //   if(ag.y > ag.x && ag.y > ag.z){ nodeAG.innerHTML += '<span>Вертикально перед собой</span>';}
    //   if(ag.z > ag.x && ag.z > ag.y){ nodeAG.innerHTML += '<span>На столе</span>';}
    // }
    // window.addEventListener('devicemotion', onMotionChange, true);

  },
  // methods:{
  //   da: function(event){
  //     // console.log(event.accelerationIncludingGravity.x);
  //     // if (window.DeviceOrientationEvent) {
  //     //   window.addEventListener('deviceorientation', (event)=>{
  //     //     this.$refs.xcord.innerText = event.alpha
  //     //   }, false);
  //     // }
  //     // if (window.DeviceMotionEvent) {
  //     //   window.addEventListener("devicemotion", (event)=>{
  //     //     this.$refs.ycord.innerText = event.accelerationIncludingGravity.y
  //     //   });
  //     // }
  //   },
  //   toggleFullScreen: function(){
  //     let doc = window.document;
  //     let docEl = doc.body;

  //     let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  //     let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  //     if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
  //       requestFullScreen.call(docEl);
  //     }
  //     else {
  //       cancelFullScreen.call(doc);
  //     }
  //   },
  //   geoposition: function(){
  //     if(!navigator.geolocation) return false
  //     navigator.geolocation.getCurrentPosition((event)=>{
  //       this.$refs.latitude.innerText = event.coords.latitude
  //       this.$refs.longitude.innerText = event.coords.longitude
  //     })
  //   },
  //   accelerometerUpdate(event) {
  //     // let aX = event.accelerationIncludingGravity.x*10;
  //     // let aY = event.accelerationIncludingGravity.y*10;
  //     // let aZ = event.accelerationIncludingGravity.z*10;
  //     console.log(event);
  //     // this.$refs.xcord.innerText = aX
  //     // this.$refs.ycord.innerText = aY
  //     // this.$refs.zcord.innerText = aZ

  //   }
  // }
}
</script>
