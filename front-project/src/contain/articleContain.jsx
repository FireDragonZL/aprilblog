import { connect } from 'react-redux'

import Article from '../components/home/component/article'

export default connect(
    state => ({ articleItem: state }),
    null
)(Article)