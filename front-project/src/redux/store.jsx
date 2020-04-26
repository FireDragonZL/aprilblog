import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {reducer} from './reducers'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

/**
 * 暂时将store挂载在window下，用于全局回去state和执行dispatch方法
 */ 
// window.$reduxStore = store

export default store