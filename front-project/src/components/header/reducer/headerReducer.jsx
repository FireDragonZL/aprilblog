/**
 * header组件的状态数据state
 */
import { INPUTFOCUS, INPUTBLUR } from '../../../redux/action_types'

const defaultState = {
    focused: false
}

export const headInputState = (state = defaultState, action) => {

    console.log("headInputState()=", state, action)

    switch (action.type) {
        case INPUTFOCUS:
            return state = { focused: true }
        case INPUTBLUR:
            return state = { focused: false }
        default:
            return state
    }
}