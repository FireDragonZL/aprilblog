import React,{Component} from 'react'

import {LoginWrapper,
        LoginBox,
        LoginInput,
        LoginBtn
       } from './login_style'

export default class Login extends Component {
    render(){
        return(
            <LoginWrapper>
                <LoginBox>
                    <LoginInput placeholder="用户" />
                    <LoginInput placeholder="密码" />
                    <LoginBtn>登录</LoginBtn>
                </LoginBox>
            </LoginWrapper>
        )
    }
}