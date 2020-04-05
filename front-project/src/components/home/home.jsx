import React,{Component} from 'react'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './home_style'
import Topic from './component/topic/topic'
import TopN from './component/topn/topn'
import Recommend from './component/recommend/recommend'
import Article from './component/articlelist/article'

/**
 * 主页的内容列表
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