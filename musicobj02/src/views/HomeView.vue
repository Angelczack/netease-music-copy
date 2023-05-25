<template>
  <div class="home">
    <div id="d1">
      oooooooo
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
#d1{
  width: 3rem;
  height: 3rem;
  background: skyblue;
  font-size: 0.3rem;
}
</style>

