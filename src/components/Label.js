import React, { Component } from 'react'

export default class Label extends Component {
  render() {
    return (
      <div className='label'>
        <div className='content'>
          <div className='day'>LUNI</div>
          <div className='date'>21</div>
          <div className='monthAndYear'><span className='month'>IANUARIE</span> <span className='year'>2020</span></div>
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
