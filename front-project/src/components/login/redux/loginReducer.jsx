import { fromJS } from 'immutable'

import { GETLOGINSTATE, LOGOUT } from './action_types'

const defaultState = fromJS({
    loginOrNot: false
})

export const loginState = (state = defaultState, action) => {

    switch (action.type) {
        case GETLOGINSTATE:
            return state.set("loginOrNot", action.data)
        case LOGOUT:
            return state.set("loginOrNot", action.data)
        default:
            return state
    }
}