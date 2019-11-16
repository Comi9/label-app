import { connect } from 'react-redux'
import * as labelActions from 'actions/labelActions'
import Label from 'components/Label'

const mapStateToProps = state => ({
  date: state.date
})

const mapDispatchToProps = dispatch => ({
  actions: {
    getDate: () => dispatch(labelActions.getDate())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Label)