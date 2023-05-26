<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgs" :key="index" v-cloak>
                    <img :src="item.pic" />
                </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination">

            </div>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from "swiper"
import {getBanner} from "@/api/index.js"   //@指的是项目目录 src
export default {
    name: "swipercom",
    data () {
        return {
           imgs:[  //轮播图的数据
            {pic:""},
            {pic:""},
            {pic:""},
            {pic:""},
            {pic:""},
            {pic:""},
            {pic:""}

           ] 
        }
    },
    async mounted() {  //async ...await  异步ajax请求参数
        var res = await getBanner(1);
        this.imgs = res.data.banners;
        console.log(res.data);
        // console.log(res);
        var myswiper = new Swiper("#swiperIndex",{
            loop:true,  //循环模式
            autoplay:true,  //自动轮播
            // 分页器
            pagination:{
                el:".swiper-pagination",
                clickable:true  //分页小圆点可以点击
            }
        })
    },
}
</script>

<style lang="less">
#swipercom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;

    .swiper-slide img {
      width: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: skyblue;
    }
  }
}
[v-cloak]{
    display: none;
}
</style>
