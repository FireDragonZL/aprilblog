import { fromJS } from 'immutable'

import { GETARTICLEDETAIL } from './action_types'

const defaultState = fromJS({
    title:"",
    content: ""
})

export const detailState = (state = defaultState, action) => {

    console.log("文章详情==", action.data)

    switch (action.type) {
        case GETARTICLEDETAIL:
            return (
                state= fromJS(action.data)
            )
        default:
            return state
    }
}