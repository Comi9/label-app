import { connect } from 'react-redux'
import * as labelActions from 'actions/labelActions'
import Tools from 'components/Tools'

const mapStateToProps = state => ({
  date: state.date
})

const mapDispatchToProps = dispatch => ({
  actions: {
    setDate: date => dispatch(labelActions.setDate(date))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tools)