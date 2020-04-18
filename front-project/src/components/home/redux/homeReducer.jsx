import { fromJS } from 'immutable'

import {CHANGEHOMEDATA} from './action_types'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

export const homeState = (state = defaultState, action) => {

    console.log("当前 action_data =", action.data)
    console.log("当前 action_data =", action)

    switch (action.type) {
        case CHANGEHOMEDATA:
            return(
                // 将传入的JS对象转为immutable对象
                state = fromJS(action.data)
            )
        default:
            return state
    }
}