import PropTypes from 'prop-types'
import React from 'react'
import ClockDigit from './ClockDigit'

export default function Hours24 ({ date, showSeconds }) {
  return (
    <>
      <ClockDigit digits={date.getHours()}/>
      <ClockDigit digits={date.getMinutes()}/>
      { showSeconds && <ClockDigit digits={date.getSeconds()}/>}
    </>
  )
}

Hours24.propTypes = {
  date: PropTypes.instanceOf(Date),
  showSeconds: PropTypes.bool
}
