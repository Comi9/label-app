const initialState = {
  date: undefined
}

function labelReducers(state = initialState, action) {
  switch(action.type) {
    case 'GET_DATE_REQUESTED':
      console.log(state)
      return { ...state };

    case 'SET_DATE_REQUESTED':
      return {...state, date: action.payload}

    default:
      return state
  }
}

export default labelReducers