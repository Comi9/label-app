import React, { Component } from 'react'
import { defaultPartner } from 'addons/svgAssets'
import { withTranslation } from 'react-i18next'

class SVGLabel extends Component {
  saveSvg(name) {
    const svgEl = document.getElementById('svg')
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  render() {
    const { t } = this.props
    const { date } = this.props
    const dayName = date.format('dddd')
    const day = date.format('D')
    const month = date.format('MMMM')
    const year = date.format('YYYY')
    const time = date.format('H:mm')
    const alias = t(`labelsApp.availableLocations.${[this.props.location.alias]}.alias`)
    const hall = t(`labelsApp.availableLocations.${[this.props.location.alias]}.hall`)
    const address = t(`labelsApp.availableLocations.${[this.props.location.alias]}.address`)
    const isSunday = date.day() === 0

    const S = (
      <svg width='300' height='472.25' viewBox='0 0 300 472.25' id='svg' xmlns="http://www.w3.org/2000/svg">
        <defs><style type="text/css">@import url('https://fontlibrary.org/face/public-sans')</style></defs>

        <path d="M0,40 
                v -30
                a10 10 0 0 1 10 -10
                h 280
                a10 10 0 0 1 10 10
                v 390
                h -300
                z"
          fill="#fff"></path>
        
        <g>
          <text x='50%' y='60' textAnchor='middle' style={{ fontFamily: 'PublicSansThin', fontSize: '40' }}>{dayName.toUpperCase()}</text>
          <text x='50%' y='220' textAnchor='middle' style={{ fontFamily: 'PublicSansBlack', fontSize: '170' }}>{day}</text>
          <text x='50%' y='250' textAnchor='middle' style={{ fontSize: '24'}}>
            <tspan style={{fontFamily: 'PublicSansBlack'}}>{month.toUpperCase()} </tspan>
            <tspan style={{fontFamily: 'PublicSansRegular'}}>{year}</tspan>
          </text>
        </g>

        <g>
          <path transform='translate(20,296)' d="M15.999 15C15.849 15 15.696 14.966 15.553 14.895L11.553 12.895C11.214 12.725 11 12.379 11 12V5C11 4.448 11.448 4 12 4C12.552 4 13 4.448 13 5V11.382L16.447 13.106C16.941 13.353 17.141 13.954 16.894 14.448C16.719 14.798 16.366 15 15.999 15ZM12 24C5.383 24 0 18.617 0 12C0 5.383 5.383 0 12 0C18.617 0 24 5.383 24 12C24 18.617 18.617 24 12 24ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" fill="black"/>
          <text x='54' y='320' style={{ fontSize: '32', fontFamily: 'PublicSansRegular' }}>{time}</text>
        </g>

        <g>
          <path transform='translate(20,342)' d="M2.43079 19.22L10.9414 30.4733C11.0655 30.637 11.2258 30.7697 11.4098 30.8611C11.5938 30.9524 11.7964 31 12.0019 31C12.2074 31 12.41 30.9524 12.594 30.8611C12.778 30.7697 12.9383 30.637 13.0624 30.4733L21.573 19.22C22.9191 17.4406 23.7417 15.3213 23.9484 13.1004C24.1551 10.8794 23.7377 8.64493 22.7431 6.64803C21.7485 4.65114 20.2162 2.97104 18.3183 1.79661C16.4205 0.622186 14.2324 0 12 0C9.76765 0 7.57955 0.622186 5.68169 1.79661C3.78384 2.97104 2.25147 4.65114 1.25687 6.64803C0.262261 8.64493 -0.155149 10.8794 0.0515631 13.1004C0.258275 15.3213 1.08091 17.4406 2.42699 19.22H2.43079ZM12.0019 5.65374C13.2235 5.65374 14.4178 6.0157 15.4335 6.69385C16.4493 7.372 17.241 8.33588 17.7085 9.46361C18.176 10.5913 18.2983 11.8322 18.06 13.0294C17.8216 14.2266 17.2334 15.3263 16.3695 16.1894C15.5057 17.0526 14.4051 17.6403 13.2069 17.8785C12.0088 18.1166 10.7668 17.9944 9.63816 17.5273C8.50951 17.0602 7.54483 16.2691 6.86612 15.2542C6.18741 14.2393 5.82515 13.046 5.82515 11.8254C5.82717 10.1892 6.47857 8.62057 7.6365 7.4636C8.79443 6.30662 10.3643 5.65575 12.0019 5.65374Z" fill="black"/>
          <text x='54' y='358'>
            <tspan style={{ fontSize: '18', fontFamily: 'PublicSansBlack' }}>{alias}</tspan>
            <tspan style={{ fontSize: '18' }}> ● </tspan>
            <tspan style={{ fontSize: '18', fontFamily: 'PublicSansRegular' }}>{hall}</tspan>
          </text>
          <text x='54' y='372'>
            <tspan style={{ fontSize: '12', fontFamily: 'PublicSansRegular' }}>{address}</tspan>
          </text>
        </g>

        <path d="M0 410   
                h 300
                v 50
                a10 10 0 0 1 -10 10
                h -280
                a10 10 0 0 1 -10 -10
                z"
          fill="#fff"></path>

        {isSunday && (
          <>
            <text x='14' y='444' style={{ fontSize: '10', fontFamily: 'PublicSansBold' }}>{t('labelsApp.eventPresentedBy')}</text>
            <g transform="translate(130,428)">
              {defaultPartner}
            </g>
          </>
        )}
      </svg>
    )

    return (
      <>
        {S}
        {/* <a href='#' onClick={() => this.saveSvg('test.svg')}>Download</a> */}
      </>
    )
  }
}

export default withTranslation()(SVGLabel)
