import React from 'react'
import ClockDigit from './ClockDigit'
import PropTypes from 'prop-types'

function toHours12 (date) {
  return (date.getHours() + 24) % 12 || 12
}

export default function Hours12 ({ date, showSeconds, isDarkMode }) {
  const timePeriod = date.getHours() >= 0 && date.getHours() < 12 ? 'AM' : 'PM'
  return (
    <>
      <ClockDigit digits={toHours12(date)} isDarkMode={isDarkMode} />
      <ClockDigit digits={date.getMinutes()} isDarkMode={isDarkMode}/>
      { showSeconds && <ClockDigit digits={date.getSeconds()} isDarkMode={isDarkMode}/>}
      <ClockDigit digits={timePeriod} isDarkMode={isDarkMode}/>
    </>
  )
}

Hours12.propTypes = {
  date: PropTypes.instanceOf(Date),
  showSeconds: PropTypes.bool,
  isDarkMode: PropTypes.bool
}
