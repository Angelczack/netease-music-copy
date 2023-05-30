<template>
    <div class="playController">
        <div class="left">
            <img :src="playlist[playCurrentIndex].al.picUrl" @click="show = !show"/>
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].name }}</div>
                <div class="tips">横划可以切换上下首哦</div>
            </div>
        </div>

        <div class="right">
            <svg v-if="played" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-iconstop"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
        <!-- 歌曲详情页面 -->
        <play-music :played="played" :play="play" :playDetail="playlist[playCurrentIndex]" v-show="show" @back="show = !show"></play-music>
        <!-- 如何获取播放歌曲的mp3地址 -->
        <!-- controls audio标签属性 一般不显示 -->
        <!-- audio play()播放音乐  pause()暂停音乐 paused当前歌曲是否处于暂停状态-->
        <!--  -->
        <audio ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PlayMusic from './PlayMusic.vue';
export default {
    name: "playcontroller",
    data() {
        return {
            played: true,   //当前音乐是否出于暂停状态
            show:false      //歌曲详情是否显示
        }
    },
    computed: {
        ...mapState(["playlist", "playCurrentIndex"]) //获取正在播放插曲列表，以及正在播放歌曲下标
    },
    components:{
        PlayMusic
    },
    methods: {
        play() {
            if (this.$refs.audio.paused == true) {  //paused是audio 的一个属性名 true为暂停状态
                //this.$refs.audio  获取audio标签
                this.$refs.audio.play();
                this.played=false;
            }
            else{
                this.$refs.audio.pause();
                this.played=true;
            }
        }
    }
}
</script>

<style lang="less">
.playController {
    background: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;

    .left {
        display: flex;
        padding: 0 0.2rem;

        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }

        .content {
            padding: 0 0.2rem;

            .tips {
                font-size: 0.2rem;
                color: #999;
            }
        }
    }

    .right {
        .icon {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.2rem;
        }
    }
}
</style>
