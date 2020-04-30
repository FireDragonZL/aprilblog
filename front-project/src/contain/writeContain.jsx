import { connect } from 'react-redux'

import Write from '../components/write/write'

export default connect(
    state => ({ loginState: state }),
    null
)(Write)