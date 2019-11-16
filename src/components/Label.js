import React, { Component } from 'react'
import moment from 'moment'

export default class Label extends Component {
  render() {
    const { date = moment() } = this.props
    const dayName = date.format('dddd')
    const year = date.format('YYYY')
    const month = date.format('MMMM')
    const day = date.format('D')

    return (
      <div className='label'>
        <div className='content'>
          <div className='day'>{dayName.toUpperCase()}</div>
          <div className='date'>{day}</div>
          <div className='monthAndYear'><span className='month'>{month.toUpperCase()}</span> <span className='year'>{year}</span></div>
          <div className='time'><div className='timeIcon'><img src='assets/images/time.svg' alt='time' /></div> 19:00</div>
          <div className='location'>
            <div className='locationIcon'><img src='assets/images/location.svg' alt='location' /></div>
            <div className='locationDetails'>
              <div className='locationName'><span className='host'>TNRS</span> ● <span className='hall'>Sala Mare</span></div>
              <div className='locationAddress'>Bvd. Corneliu Coposu, nr. 2</div>
            </div>
          </div>
        </div>
        <div className='ornaments'>
          <div className='partner'>Spectacol prezentat de</div>
          <div className='partnerLogo'><img src='assets/images/logo_allianz_tiriac.svg' alt='logo_allianz_tiriac' /></div>
        </div>
      </div>
    )
  }
}