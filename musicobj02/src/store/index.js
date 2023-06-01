import { createStore } from 'vuex'

export default createStore({
  state: {  //组件之间共享的数据
    playlist:[   //音乐播放列表  是一个数组 准备一条默认的数据
      {
        name: "断桥残雪",
        id: 167937, 
        al:{
          id: 16960,
          name: "断桥残雪",
          pic: 19061133579343590,
          picUrl: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "19061133579343591"
        }
      } 
    ],
    playCurrentIndex:0,  //当前播放音乐在播放列表中的下标
    lyric:"Angelczack"  //保存当前播放音乐的歌词
  },
  getters: {
  },
  mutations: {
    setPlayList(state,value) {    //定义一个函数来修改state中播放列表的数据
      state.playlist = value;
    },
    setPlayIndex(state,value){  //定义一个函数用来修改当前正在播放的歌曲的下标
      state.playCurrentIndex = value;
    },
    setLyric(state,value){  //定义一个函数用来修改当前正在播放的歌曲的歌词
      state.lyric = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
