import React, { Component } from 'react'
import { ButtonGroup, Button, Icon, Divider } from '@blueprintjs/core'
import { TimePicker } from '@blueprintjs/datetime';
import moment from 'moment'
import _ from 'lodash'
import { withTranslation } from 'react-i18next'

class Time extends Component {
  constructor(props) {
    super(props)

    this.handlePresetTime = this.handlePresetTime.bind(this)
    this.state = {
      selectedDate: this.props.date,
      timePresets: ['16:00', '17:00', '18:00', '19:00']
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedDate !== prevState.selectedDate
      || this.props.language !== prevProps.language)
      this.props.actions.setDate(this.state.selectedDate)
  }

  handlePresetTime(time) {
    this.setState({ selectedDate: moment(this.props.date).hour(time.substring(0, 2)) })
  }

  render() {
    const { t } = this.props
    return (
      <section>
        <h4 className='bp3-heading'><Icon icon='time' iconSize={20} /> {t('labelsApp.toolsHeaders.time')}</h4>
        <Divider />
        <div className='time-presets-wrapper'>
          <div className='time-presets'>
            <ButtonGroup>
              {_.map(this.state.timePresets, t => <Button key={t} onClick={() => this.handlePresetTime(t)} className={moment(this.props.date).hour().toString() === t.substring(0, 2) ? '' : 'bp3-active'}>{t}</Button>)}
            </ButtonGroup>
          </div>
          <div className='time-presets'>
            <TimePicker
              onChange={newTime => this.setState({ selectedDate: moment(newTime) })}
              value={this.props.date.toDate()}
              showArrowButtons />
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(Time)