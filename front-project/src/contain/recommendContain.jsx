import { connect } from 'react-redux'

import Recommend from '../components/home/component/recommend'

export default connect(
    state => ({ recommendItem: state }),
    null
)(Recommend)