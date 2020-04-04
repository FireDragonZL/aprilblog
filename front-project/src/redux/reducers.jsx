/**
 * reducer模块包含state的更新逻辑；
 * => 从store获取更新前的state，并返回更新后的state给store
 */
import {INPUTFOCUS, INPUTBLUR} from './action_types'

const defaultState = {
    focused: false
}

export const headInputState = (state = defaultState, action) => {

    console.log("headInputState()=", state, action)

    switch (action.type){
        case INPUTFOCUS:
            return state = { focused: true }
        case INPUTBLUR:
            return state = { focused: false }
        default:
            return state
    }
}