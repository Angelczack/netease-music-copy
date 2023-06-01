import axios from "axios";

const baseUrl = "http://localhost:3000";

// 封装获取轮播图的api  调配例子：/banner /banner>type=2  type=0,1,2,3
export function getBanner(type = 0) {
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

// 封装获取音乐列表  /personalized?limit=1
export function getMlists(limit=10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

// 封装获取歌单详情  /playlist/detail?id=24381616
export function getListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}
// 封装获取歌曲歌词 /lyric?id=33894312
export function getLyric(id) {
    return axios.get(`${baseUrl}/lyric?id=${id}`);
}
// 封装获取歌曲歌词 /lyric?id=33894312
export function SearchMusic(keywords) {
    return axios.get(`${baseUrl}/search?keywords=${keywords}`);
}


//对外抛出
export default { getBanner,getMlists,getListDetail,getLyric,SearchMusic };