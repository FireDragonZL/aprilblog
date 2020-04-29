/**
 * 连接方法 - 连接 容器组件 和 UI组件
 */
import {connect} from 'react-redux'

import Header from '../components/header/header'
import {headInputBlur, headInputFocus} from '../components/header/redux/actions'
import { logOut } from '../components/login/redux/actions'

export default connect(
    state => ({ focused: state }),
    { headInputBlur, headInputFocus, logOut }
)(Header)