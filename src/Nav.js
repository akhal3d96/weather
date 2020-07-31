import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as GearIcon } from './icons/gear.svg'

export default function Nav ({ setIsModalShown }) {
  const style = {
    cursor: 'pointer',
    fill: '#CCCCCC',
    width: '4 rem'
  }
  return (

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item" style={style} onClick={() => setIsModalShown(true) }>
          <GearIcon />
        </span>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  setIsModalShown: PropTypes.func
}
