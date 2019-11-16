import React, { Component } from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

export default class Tools extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: false,
      date: moment()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.date !== prevState.date) {
      this.props.actions.setDate(this.state.date)
    }
  }

  render() {
    return (
      <div className='tools'>
        <SingleDatePicker
          block
          numberOfMonths={1}
          onDateChange={date => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused })}
          focused={this.state.focused}
          date={this.state.date} />
      </div>
    )
  }
}