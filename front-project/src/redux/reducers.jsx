/**
 * reducer模块包含state的更新逻辑；
 * => 从store获取更新前的state，并返回更新后的state给store
 */
import {combineReducers} from 'redux'

import {headInputState} from '../components/header/redux/headerReducer'
import { topicState} from '../components/home/redux/topicReducer'

export const reducer = combineReducers({
    header: headInputState,
    topic: topicState
})