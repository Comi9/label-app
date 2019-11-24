import { connect } from 'react-redux'
import SVGLabel from 'components/SVGLabel'

const mapStateToProps = state => ({
  date: state.app.date,
  location: state.app.location
})

const mapDispatchToProps = dispatch => ({
  actions: {}
})

export default connect(mapStateToProps, mapDispatchToProps)(SVGLabel)