import React,{Component} from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'

import Header from '../contain/headerContain'
import { GlobalStyle } from '../index_style'
import { GlobalIconStyle } from '../static/iconfound/iconfont'
import store from '../redux/store'
import Home from '../contain/homeContain'
import Detail from '../contain/detailContain'
import Login from '../contain/loginContain'
import Write from './write/write'

export default class App extends Component {

    render(){
        return (
            <div>
                <GlobalStyle />
                <GlobalIconStyle />
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <Route path="/" exact component={Home} />
                        <Route path="/detail/:id" exact component={Detail} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/write" exact component={Write} />
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}