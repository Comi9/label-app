import moment from 'moment'
import 'moment/locale/de'
import 'moment/locale/ro'
import { DEFAULT_LANGUAGE } from 'addons/languages'
import { DEFAULT_DATE } from 'addons/calendar'
import { DEFAULT_LOCATION } from 'addons/locations'

const initialState = {
  language: DEFAULT_LANGUAGE,
  date: DEFAULT_DATE,
  location: DEFAULT_LOCATION
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_LANGUAGE_REQUESTED':
      return { ...state }
    
    case 'SWITCH_LANGUAGE_REQUESTED':
      return { ...state, language: action.payload }
  
    case 'GET_DATE_REQUESTED':
      return { ...state }

    case 'SET_DATE_REQUESTED':
      if (!moment(action.payload).isValid()) return { ...state }
      return { ...state, date: moment(action.payload).locale(state.language) }

    case 'GET_LOCATION_REQUESTED':
      return { ...state }

    case 'SET_LOCATION_REQUESTED':
        return { ...state, location: action.payload }

    default:
      return state
  }
}

export default appReducer