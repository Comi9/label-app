import moment from 'moment'

const initialState = {
  date: moment().hour(19).minute(0).second(0)
}

function labelReducers(state = initialState, action) {
  switch(action.type) {
    case 'GET_DATE_REQUESTED':
      return { ...state }

    case 'SET_DATE_REQUESTED':
      if (!moment(action.payload).isValid()) return { ...state }
      return {...state, date: action.payload}

    default:
      return state
  }
}

export default labelReducers