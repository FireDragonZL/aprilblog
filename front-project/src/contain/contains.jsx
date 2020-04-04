import {connect} from 'react-redux'

import Header from '../components/header/header'
import {headInputBlur, headInputFocus} from '../redux/actions'

export default connect(
    state => ({ focused: state }),
    { headInputBlur, headInputFocus }
)(Header)