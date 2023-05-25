<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
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
export default {
    name: "swipercom",
    data () {
        return {
           imgs:[  //轮播图的数据
            {pic:require("../assets/logo.png")},
            {pic:require("../assets/logo.png")},
            {pic:require("../assets/logo.png")}
           ] 
        }
    },
    mounted() {
        var myswiper = new Swiper("#swiperIndex",{
            //loop:true,  //循环模式
            // autoplay:true  //自动轮播
            // 分页器
            pagination:{
                el:".swiper-pagination",
                clickable:true  //分页小圆点可以点击
            }
        })
    },
}
</script>

<style>
.swiper-slide{display: flex; justify-content: center; align-items: center;}
</style>