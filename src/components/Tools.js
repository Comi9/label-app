import React, { Component } from 'react'
import Language from 'components/Language'
import Calendar from 'components/Calendar'
import Time from 'components/Time'
import Locations from 'components/Locations'


export default class Tools extends Component {
  render() {
    return (
      <>
        <Language {...this.props} />
        <Calendar {...this.props} />
        <Time {...this.props} />
        <Locations {...this.props} />
      </>
    )
  }
}