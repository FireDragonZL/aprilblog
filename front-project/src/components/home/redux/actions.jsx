/**
 * action对象包含状态更改类型和状态更改数据
 */
import { CHANGEHOMEDATA, GETMORELIST, CHANGESCORLL } from './action_types'

// 修改首页内容的data
export const changeHomeDate = () => { 
    return dispatch => {
        fetch("/api/homeData.json")
        .then((res) => {
            // 获取json格式文件，并返回
            return res.json()
        }).then((data) => {
            // console.log("返回结果数据为=", data.data)
            dispatch(actionCreater(data.data))
        })
    }
 }

const actionCreater = (number) => ({ type: CHANGEHOMEDATA, data: number })

// 首页文章列表 - 更多内容按钮
export const getMoreList = (pageNum) => {
    return dispatch => {
        //console.log("获取更多内容。。。")
        fetch("/api/moreHomeList.json?page=" + pageNum)
        .then((res) => {
            return res.json()
        }).then((data) => {
            console.log("获取下一页内容=", pageNum + 1)
            dispatch(actionMoreListCreater(data.data, pageNum + 1))
        })
    }
}

const actionMoreListCreater = (articleList, nextPage) => ({
    type: GETMORELIST, 
    data: [articleList,nextPage]
})

// 修改 返回顶部 按钮是否显示的状态
export const changeShowScroll = (show) => ({
    type: CHANGESCORLL,
    data: show
})

