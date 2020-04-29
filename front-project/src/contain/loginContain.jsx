import {connect} from 'react-redux'

import Login from '../components/login/Login'
import { getLoginState } from '../components/login/redux/actions'

export default connect(
    state => ({loginState: state}),
    { getLoginState }
)(Login)