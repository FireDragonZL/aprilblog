import { connect } from 'react-redux'

import Home from '../components/home/home'
import { changeHomeDate } from '../components/home/redux/actions'

export default connect(
    null,
    { changeHomeDate }
)(Home)