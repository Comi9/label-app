import React, { Component } from 'react'
import { ButtonGroup, Button } from '@blueprintjs/core'
import { LANGUAGES } from 'addons/languages'
import _ from 'lodash'
import i18next from 'i18next'

export default class Language extends Component {
  switchLanguage(language) {
    i18next.changeLanguage(language)
    this.props.actions.switchLanguage(language)
  }

  render() {
    return (
      <ButtonGroup className={'application-locales'}>
        {_.map(LANGUAGES, language => <Button key={language} onClick={() => this.switchLanguage(language)} className={this.props.language === language ? 'bp3-active' : ''}>{language}</Button>)}
      </ButtonGroup>
    )
  }
}