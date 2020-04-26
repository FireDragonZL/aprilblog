import { connect } from 'react-redux'

import Home from '../components/home/home'
import { changeHomeDate, changeShowScroll } from '../components/home/redux/actions'

export default connect(
    state => ({showScroll: state}),
    { changeHomeDate, changeShowScroll }
)(Home)