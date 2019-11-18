import React, { Component } from 'react'
import { ButtonGroup, Button } from '@blueprintjs/core'
import { LANGUAGES } from 'addons/languages'
import _ from 'lodash'

export default class Language extends Component {
  render() {
    return (
      <ButtonGroup className={'application-locales'}>
        {_.map(LANGUAGES, l => <Button key={l} onClick={() => this.props.actions.switchLanguage(l)} className={this.props.language === l ? 'bp3-active' : ''}>{l}</Button>)}
      </ButtonGroup>
    )
  }
}