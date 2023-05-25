<template>
  <div class="home">
   <!-- 头部导航--> 
   <top-nav></top-nav>
   <!-- 轮播图-->
   <swiper-com></swiper-com>
   <!-- icon列表-->
   <icon-list></icon-list>
   <!-- 音乐列表 -->
   <music-list></music-list>

  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue"
import SwiperCom from "@/components/SwiperCom.vue"
import IconList from "@/components/IconList.vue"
import MusicList from "@/components/MusicList.vue"
export default {
  name: 'HomeView',
  components: {
    SwiperCom,
    TopNav,
    IconList,
    MusicList

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

