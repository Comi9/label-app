import { connect } from 'react-redux'
import Label from 'components/Label'

const mapStateToProps = state => ({
  date: state.app.date,
  location: state.app.location
})

const mapDispatchToProps = dispatch => ({
  actions: {}
})

export default connect(mapStateToProps, mapDispatchToProps)(Label)