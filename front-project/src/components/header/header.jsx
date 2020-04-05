import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

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
export default class Header extends Component {
    // 将状态值和状态更改类型作为属性值传进来
    static propTypes = {
        focused: PropTypes.object.isRequired,
        headInputBlur: PropTypes.func.isRequired,
        headInputFocus: PropTypes.func.isRequired
    }
    // 绑定获取焦点事件
    handleInputFocus = () => {
        // 调用store中的更新方法（发布）
        this.props.headInputFocus();
    }
    // 绑定失去焦点函数
    handleInputBlur = () => {
        this.props.headInputBlur();
    }
    // 渲染
    render(){
        // 从map对象中获取focused对应的值
        const focused = this.props.focused.header.get("focused")
        console.log("当前的focused对象为=", this.props.focused.header)
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