import { connect } from 'react-redux'
import * as appActions from 'actions/appActions'
import Tools from 'components/Tools'

const mapStateToProps = state => ({
  language: state.app.language,
  date: state.app.date,
  location: state.app.location
})

const mapDispatchToProps = dispatch => ({
  actions: {
    setLanguage: () => dispatch(appActions.setLanguage()),
    switchLanguage: language => dispatch(appActions.switchLanguage(language)),
    setDate: date => dispatch(appActions.setDate(date)),
    setLocation: location => dispatch(appActions.setLocation(location))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tools)