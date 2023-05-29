<template>
    <div>
       <!-- 歌单详情 -->
       <MlisTop :playList="music.playList"></MlisTop>
       <!-- 歌曲列表 -->
      <mplaylist :playList="music.playList"></mplaylist>
    </div>
</template>

<script>
// import axios from 'axios'
import { useRoute } from 'vue-router';
import { onMounted,reactive } from "vue";
import { getListDetail } from "@/api/index.js"   //@指的是项目目录 src

import MlisTop from "@/components/MlisTop.vue"
import Mplaylist from "@/components/MplayList.vue"
export default {
    name: "listDetail",
    setup() {
        var route = useRoute();  //当前路由信息对象 等价于$router
        const music = reactive({ 
           list:[],
           playList:{
            creator:{},  //歌单详情
            tracks:[]   //播放列表
           },
        });
        onMounted( async() => {
            const id = route.query.id;  //当前歌单的id
            console.log(id);
            var res = await getListDetail(id); //发送axios请求， 获取歌单详情
            // console.log(res);
           music.playList = res.data.playlist;  //将获取的数据放到响应式数据中
           console.log(music.playList);
        })
        return{music}
    },
    components:{
        MlisTop,
        Mplaylist
    }
}
</script>

<style></style>