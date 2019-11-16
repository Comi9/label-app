import React, { Component } from 'react'
import LabelContainer from 'containers/LabelContainer'
import ToolsContainer from 'containers/ToolsContainer'

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