export const SET_LANGUAGE_REQUESTED = 'SET_LANGUAGE_REQUESTED'
export const SWITCH_LANGUAGE_REQUESTED = 'SWITCH_LANGUAGE_REQUESTED'
export const SET_DATE_REQUESTED = 'SET_DATE_REQUESTED'
export const GET_DATE_REQUESTED = 'GET_DATE_REQUESTED'
export const SET_LOCATION_REQUESTED = 'SET_LOCATION_REQUESTED'
export const GET_LOCATION_REQUESTED = 'GET_DATE_REQUESTED'

export function setLanguage() {
  return { type: SET_LANGUAGE_REQUESTED }
}

export function switchLanguage(payload) {
  return { type: SWITCH_LANGUAGE_REQUESTED, payload }
}

export function setDate(payload) {
  return { type: SET_DATE_REQUESTED, payload }
}

export function getDate() {
  return { type: GET_DATE_REQUESTED }
}

export function setLocation(payload) {
  return { type: SET_LOCATION_REQUESTED, payload }
}

export function getLocation() {
  return { type: GET_LOCATION_REQUESTED }
}
