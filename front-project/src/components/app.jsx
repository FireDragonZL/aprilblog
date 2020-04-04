import React,{Component} from 'react'

import Header from './header/header'
import { GlobalStyle } from '../index_style'
import { GlobalIconStyle } from '../static/iconfound/iconfont'


export default class App extends Component {

    render(){
        return(
            <div>
                <GlobalStyle />
                <GlobalIconStyle />
                <Header />
            </div>
        )
    }
}