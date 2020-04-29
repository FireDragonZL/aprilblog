import {connect} from 'react-redux'

import Detail from '../components/detail/detail'
import { getArticleDetail } from '../components/detail/redux/actions'

export default connect(
    state => ({detailState: state}),
    { getArticleDetail }
)(Detail)