import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'

import {reducer} from './reducers'

// redux-devtools插件是否存在，否则返回compose函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

/**
 * 暂时将store挂载在window下，用于全局回去state和执行dispatch方法
 */ 
// window.$reduxStore = store

export default store