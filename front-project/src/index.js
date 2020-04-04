import React from 'react'
import {render} from 'react-dom'

import App from './components/app'
import './index_style.js'
import './static/iconfound/iconfont.js'
import store from './redux/store'

function Render(){
    render(
        <App />,
        document.getElementById('root')
    )
}

// 初始化状态
Render()

// 监听事件(订阅)，触发更新
store.subscribe(function () {
    Render()
})