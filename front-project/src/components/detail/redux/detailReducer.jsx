import { fromJS } from 'immutable'

import { GETARTICLEDETAIL } from './action_types'

const defaultState = fromJS({
    title:"",
    content: ""
})

export const detailState = (state = defaultState, action) => {

    switch (action.type) {
        case GETARTICLEDETAIL:
            return (
                state= fromJS(action.data)
            )
        default:
            return state
    }
}