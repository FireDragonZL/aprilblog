import { connect } from 'react-redux'

import Topic from '../components/home/component/topic'

export default connect(
    state => ({ topicItem: state }),
    null
)(Topic)