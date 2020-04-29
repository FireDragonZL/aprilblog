import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

import {LoginWrapper,
        LoginBox,
        LoginInput,
        LoginBtn
       } from './login_style'

export default class Login extends Component {
    static propTypes = {
        loginState: PropTypes.object.isRequired,
        getLoginState: PropTypes.func.isRequired
    }

    render(){
        // 判断用户是否登录
        const loginState = this.props.loginState.login.get("loginOrNot")
        // 点击 登录 按钮
        const { getLoginState } = this.props

        if (!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="用户" ref={(input) => { this.account = input }} />
                        <LoginInput placeholder="密码" type="password" ref={(input) => { this.pwd = input }} />
                        <LoginBtn onClick={() => getLoginState(this.account.value, this.pwd.value)}>登录</LoginBtn>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return (
                <Redirect to="/" />
            ) 
        }    
    }
}