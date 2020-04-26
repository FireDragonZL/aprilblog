import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
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
        showScroll: PropTypes.object.isRequired,
        changeHomeDate: PropTypes.func.isRequired,
        changeShowScroll: PropTypes.func.isRequired
    }

    // 初始化状态挂载
    componentDidMount(){
        // 从后台获取页面数据
        this.props.changeHomeDate()
        // 为 滚动 绑定事件监听函数
        this.bindEvents()
    }

    bindEvents(){
        // 窗口在滚动时会触发监听事件
        window.addEventListener("scroll", () => {
            // 实时获取当前位置距离顶部的距离
            const top = document.documentElement.scrollTop
            // 将store暂时挂载到window对象中，用于分发action
            if (top > 200) {
                // TODO
                //window.$reduxStore.dispatch(changeShowScroll(true));
                this.props.changeShowScroll(true);
            } else {
                // TODO
                //window.$reduxStore.dispatch(changeShowScroll(false));
                this.props.changeShowScroll(false);
            }
        })
    }

    handleScrollTop(){
        // 将当前页面翻转到顶部
        window.scrollTo(0, 0)
    }

    render(){
        // "是否返回顶部=", showScroll为布尔值
        const showScroll = this.props.showScroll.home.get("showScroll")
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

                {showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrapper>
        )
    }
}