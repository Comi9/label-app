import React, { Component } from 'react'
import { Icon, Divider } from '@blueprintjs/core'
import { DatePicker } from '@blueprintjs/datetime'
import { LocaleUtils } from 'react-day-picker'
import moment from 'moment'

export default class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedDate: moment() }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedDate !== prevState.selectedDate) {
      this.props.actions.setDate(this.state.selectedDate)
    }
  }

  render() {
    return (
      <section>
        <h4 className='bp3-heading'><Icon icon='calendar' iconSize={20} /> Date</h4>
        <Divider />
        <DatePicker
          onChange={newDate => this.setState({ selectedDate: moment(newDate).hour(19).minute(0) })}
          dayPickerProps={{ firstDayOfWeek: 1 }}
          highlightCurrentDay={true}
          localeUtils={LocaleUtils}
          shortcuts={true}
          locale='ro' />
      </section>
    )
  }
}