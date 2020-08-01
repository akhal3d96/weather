import React from 'react'
import ClockDigit from './ClockDigit'
import PropTypes from 'prop-types'

function toHours12 (date) {
  return (date.getHours() + 24) % 12 || 12
}

export default function Hours12 ({ date, showSeconds }) {
  const timePeriod = date.getHours() >= 0 && date.getHours() < 12 ? 'AM' : 'PM'
  return (
    <>
      <ClockDigit digits={toHours12(date)}/>
      <ClockDigit digits={date.getMinutes()}/>
      { showSeconds && <ClockDigit digits={date.getSeconds()}/>}
      <ClockDigit digits={timePeriod}/>
    </>
  )
}

Hours12.propTypes = {
  date: PropTypes.instanceOf(Date),
  showSeconds: PropTypes.bool
}
