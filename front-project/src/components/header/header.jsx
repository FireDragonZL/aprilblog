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
import { Link } from 'react-router-dom'
export default class Header extends Component {
    // 将状态值和状态更改类型作为属性值传进来
    static propTypes = {
        focused: PropTypes.object.isRequired,
        headInputBlur: PropTypes.func.isRequired,
        headInputFocus: PropTypes.func.isRequired,
        logOut: PropTypes.func.isRequired
    }
    
    // 渲染
    render(){
        // 从map对象中获取focused对应的值
        const focused = this.props.focused.header.get("focused")
        const { headInputBlur, headInputFocus, logOut } = this.props
        // 是否登录
        const login = this.props.focused.login.get("loginOrNot")

        return(
            <HeaderBody>
                <HeaderWrapper>
                    <Link to="/">
                        <HeaderLogo />
                    </Link>
                    <Nav>
                        <Link to="/">
                            <NavItem className="active">首页</NavItem>
                        </Link>
                        <NavItem className="download">下载APP</NavItem>
                        <NavSearch>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <SearchWrapper className={focused ? "focused" : ""}
                                    onFocus={headInputFocus}
                                    onBlur={headInputBlur}
                                />
                            </CSSTransition>
                            <i className={focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
                        </NavSearch>
                        <NavEmpty />
                        <NavItem>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        {
                            login ? <NavItem onClick={logOut}>退出</NavItem> : 
                            <Link to="/login">
                                <NavItem>登录</NavItem>
                            </Link>
                        }
                        
                    </Nav>
                    <HeaderAddition>
                        <Button className="register">注册</Button>
                        <Link to="/write">
                            <Button className="writing">
                                <i className="iconfont">&#xe6e5;</i>&nbsp;
                                写文章
                            </Button>
                        </Link>
                    </HeaderAddition>
                </HeaderWrapper>
            </HeaderBody>
        )
    }
}