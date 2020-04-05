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
    ],
    articleList: [
        {
            id: 1,
            title: "一个人是否值得交往，看这四点就够了",
            desc: "有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...",
            imgURI: "https://upload-images.jianshu.io/upload_images/11864358-a0a516a8e7bbaa45?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id: 2,
            title: "一个人是否值得交往，看这四点就够了",
            desc: "有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...",
            imgURI: "https://upload-images.jianshu.io/upload_images/11864358-a0a516a8e7bbaa45?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id: 3,
            title: "一个人是否值得交往，看这四点就够了",
            desc: "有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...",
            imgURI: "https://upload-images.jianshu.io/upload_images/11864358-a0a516a8e7bbaa45?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
    ]
})

export const homeState = (state = defaultState, action) => {

    console.log("homeState()=", state, action)

    switch (action.type) {
        default:
            return state
    }
}