<template>
  <div class="page">
    <h1>ты чмо!</h1>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted(){
    this.axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      console.log(response.data);
    })
    gsap.to(document.querySelector('h1'), {
      y: 100
    })
  }
}
</script>
