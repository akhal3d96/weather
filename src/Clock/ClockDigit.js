import PropTypes from 'prop-types'
import React from 'react'

export default function ClockDigit ({ digits, isDarkMode, children }) {
  const style = { fontSize: '6rem' }
  return (
    <div className="column">
      <h1 className={isDarkMode && 'has-text-white'} style={style}>{digits} { children }</h1>
    </div>
  )
}

ClockDigit.propTypes = {
  digits: PropTypes.oneOfType([Number, String]).isRequired,
  children: PropTypes.array,
  isDarkMode: PropTypes.bool
}
