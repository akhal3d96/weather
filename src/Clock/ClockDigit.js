import PropTypes from 'prop-types'
import React from 'react'

export default function ClockDigit ({ digits, children }) {
  const style = { fontSize: '6rem' }
  return (
    <div className="column">
      <h1 style={style}>{digits} { children }</h1>
    </div>
  )
}

ClockDigit.propTypes = {
  digits: PropTypes.number,
  children: PropTypes.array
}
