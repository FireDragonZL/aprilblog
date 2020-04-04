import React,{Component} from 'react'
import {Provider} from 'react-redux'

import Header from './header/header'
import { GlobalStyle } from '../index_style'
import { GlobalIconStyle } from '../static/iconfound/iconfont'
import store from '../redux/store'

export default class App extends Component {

    render(){
        console.log("APP组件渲染...")
        return(
            <div>
                <GlobalStyle />
                <GlobalIconStyle />
                <Header store={store}/>
            </div>
        )
    }
}