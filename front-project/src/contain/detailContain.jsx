import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import Detail from '../components/detail/detail'
import { getArticleDetail } from '../components/detail/redux/actions'

export default connect(
    state => ({detailState: state}),
    { getArticleDetail }
)(withRouter(Detail))