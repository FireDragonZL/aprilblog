import { fromJS,List } from 'immutable'

import { CHANGEHOMEDATA, GETMORELIST, CHANGESCORLL } from './action_types'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,      // 分页
    showScroll: false    // 是否显示 返回顶部 图标
})

export const homeState = (state = defaultState, action) => {

    console.log("当前 action_data =", action.data)
    console.log("当前 state =", state.get("showScroll"))

    switch (action.type) {
        case CHANGEHOMEDATA:
            return(
                /**
                 * 将传入的JS对象转为immutable对象
                 * 1.使用merge进行单个state子元素的修改，有助于其他子元素保持默认值
                 */
                state.merge({
                    'topicList': fromJS(action.data.topicList),
                    'articleList': fromJS(action.data.articleList),
                    'recommendList': fromJS(action.data.recommendList)
                })
            )
        case GETMORELIST:
            /**
             * 1.将获取的data转为不可变对象；
             * 2.获取key值对应的list集合（类型不一致无法实现concat拼接）
             */
            const list = fromJS(action.data[0].articleList)
            return(
                state.merge({
                    // 合并获取的state和原有的state
                    'articleList': state.get('articleList').concat(list),
                    'articlePage': fromJS(action.data[1])
                })
            )
        case CHANGESCORLL:
            return(
                state.set("showScroll", fromJS(action.data))
            )
        default:
            return state
    }
}