import React, { Component } from 'react'
import Label from 'components/Label'
import Tools from 'components/Tools'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='canvas'>
          <Label />
        </div>
        <div className='tools'>
          <Tools />
        </div>
      </div>
    )
  }
}