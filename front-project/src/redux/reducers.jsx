/**
 * reducer模块包含state的更新逻辑；
 * => 从store获取更新前的state，并返回更新后的state给store
 */
import {combineReducers} from 'redux'

import {headInputState} from '../components/header/redux/headerReducer'
import {homeState} from '../components/home/redux/homeReducer'
import {detailState} from '../components/detail/redux/detailReducer'

export const reducer = combineReducers({
    header: headInputState,
    home: homeState,
    detail: detailState
})