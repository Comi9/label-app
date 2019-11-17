import React, { Component } from 'react'
import { FocusStyleManager } from '@blueprintjs/core'
import LabelContainer from 'containers/LabelContainer'
import ToolsContainer from 'containers/ToolsContainer'

FocusStyleManager.onlyShowFocusOnTabs()

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='canvas'>
          <LabelContainer />
        </div>

        <div className='tools'>
          <ToolsContainer />
        </div>
      </div>
    )
  }
}