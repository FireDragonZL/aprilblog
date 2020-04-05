import React,{Component} from 'react'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './home_style'
import TopN from './component/topn'
import Recommend from './component/recommend'
import Article from '../../contain/articleContain'
import Topic from '../../contain/topicContain'

/**
 * 主页的内容列表 布局
 */

export default class Home extends Component {
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