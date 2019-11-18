import { connect } from 'react-redux'
import * as appActions from 'actions/appActions'
import Label from 'components/Label'

const mapStateToProps = state => ({
  date: state.app.date
})

const mapDispatchToProps = dispatch => ({
  actions: {
    getDate: date => dispatch(appActions.getDate(date))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Label)