import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './home_style'
import TopN from './component/topn'
import Recommend from '../../contain/recommendContain'
import Article from '../../contain/articleContain'
import Topic from '../../contain/topicContain'

/**
 * 主页的内容列表 布局
 */

export default class Home extends Component {
    static propTypes = {
        changeHomeDate: PropTypes.func.isRequired
    }

    // 初始化状态挂载
    componentDidMount(){
        this.props.changeHomeDate()
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <Article />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <TopN />
                </HomeRight>
            </HomeWrapper>
        )
    }
}