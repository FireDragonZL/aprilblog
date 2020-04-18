/**
 * action对象包含状态更改类型和状态更改数据
 */
import { CHANGEHOMEDATA } from './action_types'

// 修改首页内容的data
export const changeHomeDate = () => { 
    return dispatch => {
        fetch("/api/homeData.json")
        .then((res) => {
            // 获取json格式文件，并返回
            return res.json()
        }).then((data) => {
            console.log("返回结果数据为=", data.data)
            dispatch(actionCreater(data.data))
        })
    }
 }

export const actionCreater = (number) => ({ type: CHANGEHOMEDATA, data: number })
