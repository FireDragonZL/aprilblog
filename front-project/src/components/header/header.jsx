import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'

import { HeaderBody,
        HeaderWrapper,
        HeaderLogo,
        Nav,
        NavItem,
        NavSearch,
        SearchWrapper,
        NavEmpty,
        HeaderAddition,
        Button,
       } from './header_style'
import {headInputBlur, headInputFocus} from '../../redux/actions'
export default class Header extends Component {
    
    // 绑定获取焦点事件
    handleInputFocus = () => {
        // 调用store中的更新方法（发布）
        this.props.store.dispatch(headInputFocus());
    }
    // 绑定失去焦点函数
    handleInputBlur = () => {
        this.props.store.dispatch(headInputBlur());
    }
    // 渲染
    render(){
        const {focused} = this.props.store.getState()
        console.log("当前的focused状态为=", focused)
        console.log("Header组件渲染...")
        return(
            <HeaderBody>
                <HeaderWrapper>
                    <HeaderLogo />
                    <Nav>
                        <NavItem className="active">首页</NavItem>
                        <NavItem className="download">下载APP</NavItem>
                        <NavSearch>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <SearchWrapper className={focused ? "focused" : ""}
                                    onFocus={this.handleInputFocus}
                                    onBlur={this.handleInputBlur}
                                />
                            </CSSTransition>
                            <i className={focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
                        </NavSearch>
                        <NavEmpty />
                        <NavItem>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <NavItem>登录</NavItem>
                    </Nav>
                    <HeaderAddition>
                        <Button className="register">注册</Button>
                        <Button className="writing">
                            <i className="iconfont">&#xe6e5;</i>&nbsp;
                            写文章
                        </Button>
                    </HeaderAddition>
                </HeaderWrapper>
            </HeaderBody>
        )
    }
}