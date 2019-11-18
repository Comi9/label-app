import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import App from './App'
import './i18n'
import './styles/index.sass'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))