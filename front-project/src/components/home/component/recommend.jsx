import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    RecommendWrapper,
    RecommendInfo
} from '../home_style'

/**
 * 推荐列表组件
 */

export default class Recommend extends Component {

    static propTypes = {
        recommendItem: PropTypes.object.isRequired
    }

    render() {
        const list = this.props.recommendItem.home.get("recommendList")
        console.log("当前的recommend对象=", list)
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return(
                            <RecommendInfo key={item.get("id")} imgURI={item.get("imgURI")}/>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}