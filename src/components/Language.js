import React, { Component } from 'react'
import { ButtonGroup, Button } from '@blueprintjs/core'
import { LANGUAGES } from 'addons/languages'
import _ from 'lodash'
import i18next from 'i18next'

export default class Language extends Component {
  switchLanguage(l) {
    i18next.changeLanguage(l)
    this.props.actions.switchLanguage(l)
  }

  render() {
    return (
      <ButtonGroup className={'application-locales'}>
        {_.map(LANGUAGES, l => <Button key={l} onClick={() => this.switchLanguage(l)} className={this.props.language === l ? 'bp3-active' : ''}>{l}</Button>)}
      </ButtonGroup>
    )
  }
}