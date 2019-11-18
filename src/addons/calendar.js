import moment from 'moment'
import { DEFAULT_LANGUAGE } from 'addons/languages'

export const DEFAULT_DATE = moment().hour(19).minute(0).second(0)

export const calendarShortcuts = (locale = DEFAULT_LANGUAGE) => {
  return [
    {
      date: new Date(moment()),
      label: new Intl.RelativeTimeFormat(locale, {numeric: "auto"}).format(0, 'day')
    },
    {
      date: new Date(moment().subtract(1, 'days')),
      label: new Intl.RelativeTimeFormat(locale, {numeric: "auto"}).format(-1, 'day')
    },
    {
      date: new Date(moment().add(1, 'days')),
      label: new Intl.RelativeTimeFormat(locale, {numeric: "auto"}).format(1, 'day')
    }
  ]
}