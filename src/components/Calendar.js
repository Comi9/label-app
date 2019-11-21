import React, { Component } from 'react'
import { Icon, Divider } from '@blueprintjs/core'
import { DatePicker } from '@blueprintjs/datetime'
import moment from 'moment'
import MomentLocaleUtils from 'react-day-picker/moment'
import { withTranslation } from 'react-i18next'

import { calendarShortcuts, minDate, maxDate } from 'addons/calendar'

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedDate: moment(), language: this.props.language }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedDate !== prevState.selectedDate
      || this.props.language !== prevProps.language) {
        this.props.actions.setDate(this.state.selectedDate)
        this.setState({ language: this.props.language })
        moment.locale(this.state.language)
      }
  }

  render() {
    const { t } = this.props
    const { language } = this.state

    return (
      <section>
        <h4 className='bp3-heading'><Icon icon='calendar' iconSize={20} /> {t('labelsApp.toolsHeaders.date')}</h4>
        <Divider />
        <DatePicker
          selectedDays={new Date()}
          onChange={newDate => this.setState({ selectedDate: moment(newDate).hour(19).minute(0) })}
          highlightCurrentDay={true}
          shortcuts={calendarShortcuts(language)}
          modifiers={{ weekEnds: { daysOfWeek: [0, 6] } }}
          minDate={minDate()}
          maxDate={maxDate()}
          dayPickerProps={{
            locale: language,
            fixedWeeks: true,
            showOutsideDays: true,
            modifiersStyles: { weekEnds: { color: '#ffc107' } },
            localeUtils: MomentLocaleUtils
          }} />
      </section>
    )
  }
}

export default withTranslation()(Calendar)