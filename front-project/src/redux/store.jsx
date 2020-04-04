import { createStore } from 'redux'

import {headInputState} from './reducers'

const store = createStore(headInputState)

export default store