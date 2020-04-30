import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

export default class Write extends Component {
    static propTypes = {
        loginState: PropTypes.object.isRequired
    }
    render(){
        // 判断是否登录
        const login = this.props.loginState.login.get("loginOrNot")

        if (login) {
            return (
                <div>Hello Write!</div>
            )
        } else {
            return (
                <Redirect to="/login" />
            )
        }
        
    }
}