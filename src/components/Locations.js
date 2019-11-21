import React, { Component } from 'react'
import { ButtonGroup, Button, Icon, Divider } from '@blueprintjs/core'
import _ from 'lodash'
import { LOCATIONS } from 'addons/locations'
import { withTranslation } from 'react-i18next'

class Locations extends Component {
  switchLocation(location) {
    this.props.actions.setLocation(location)
  }

  render() {
    const { t } = this.props
    return (
      <section>
        <h4 className='bp3-heading'><Icon icon='map-marker' iconSize={20} /> {t('labelsApp.toolsHeaders.location')}</h4>
        <Divider />
        <div className='location-presets-wrapper'>
          <div className='location-presets'>
            <ButtonGroup>
              {_.map(LOCATIONS, location => <Button key={location.alias} onClick={() => this.switchLocation(location)} className={this.props.location.id === location.id ? 'bp3-active' : ''}>{location.alias}</Button>)}
            </ButtonGroup>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(Locations)