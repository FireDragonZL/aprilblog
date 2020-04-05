/**
 * header组件的状态数据state
 */
import { INPUTFOCUS, INPUTBLUR } from '../../../redux/action_types'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false
})

export const headInputState = (state = defaultState, action) => {

    console.log("headInputState()=", state, action)

    switch (action.type) {
        case INPUTFOCUS:
            // state此时是一个immutable对象，调用set方法生成一个map类型的新的state对象
            return state.set("focused", true)
        case INPUTBLUR:
            return state.set("focused", false)
        default:
            return state
    }
}