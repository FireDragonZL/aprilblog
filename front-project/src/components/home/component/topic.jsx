import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { 
    TopicWrapper,
    TopicItem
} from '../home_style'

/**
 * 主题 组件
 */

export default class Topic extends Component {

    static propTypes = {
        topicItem: PropTypes.object.isRequired
    }

    render() {
        const topicList = this.props.topicItem.home.get("topicList")
        console.log("当前topic对象为=", topicList)
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get("id")}>
                                {item.get("topic")}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>        
        )
    }
}