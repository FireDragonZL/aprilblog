import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            topic: "社会热点"
        },
        {
            id: 2,
            topic: "科技人生"
        },
        {
            id: 3,
            topic: "新闻周刊"
        }
    ]
})

export const topicState = (state = defaultState, action) => {

    console.log("topicState()=", state, action)

    switch (action.type) {
        default:
            return state
    }
}