export const GET_DATE_REQUESTED = 'GET_DATE_REQUESTED'
export const SET_DATE_REQUESTED = 'SET_DATE_REQUESTED'

export function getDate() {
  return { type: GET_DATE_REQUESTED }
}

export function setDate(payload) {
  return { type: SET_DATE_REQUESTED, payload }
}