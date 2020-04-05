/**
 * 容器组件
 */
import {connect} from 'react-redux'

import Header from '../components/header/header'
import {headInputBlur, headInputFocus} from '../redux/actions'

export default connect(
    headInputState => ({ focused: headInputState }),
    { headInputBlur, headInputFocus }
)(Header)