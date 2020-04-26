import { connect } from 'react-redux'

import Article from '../components/home/component/article'
import { getMoreList } from '../components/home/redux/actions'

export default connect(
    state => ({ articleItem: state }),
    {getMoreList}
)(Article)