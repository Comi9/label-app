import React, { Component } from 'react'
import Calendar from 'components/Calendar'
import Time from 'components/Time'

export default class Tools extends Component {
  constructor() {
    super()

    this.state = {}
  }


  render() {
    return (
      <>
        <Calendar {...this.props} />
        <Time {...this.props} />
      </>
    )
  }
}