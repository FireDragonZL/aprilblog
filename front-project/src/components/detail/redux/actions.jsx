/**
 * action对象包含状态更改类型和状态更改数据
 */
import { GETARTICLEDETAIL } from './action_types'

export const getArticleDetail = (id) => {
    return dispatch => {
        fetch("/api/homeDetail.json?id=" + id)
        .then((res) => {
            return res.json()
        }).then((data) => {
            dispatch(actionCreater(data.data))
        })
    }
}

const actionCreater = (number) => ({ type: GETARTICLEDETAIL, data: number })