import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import htmlBackgroundColor from './html_background_color'
import { ReactComponent as GearIcon } from './icons/gear.svg'
import { SettingsContext } from './Settings'

function toggleThemeMode (settings, updateSettings) {
  const isDarkMode = !settings.isDarkMode
  updateSettings({ ...settings, isDarkMode })

  htmlBackgroundColor(isDarkMode)
}

function LightButton () {
  return (
    <button className="button is-dark">Dark</button>
  )
}

function DarkButton () {
  return (
    <button className="button is-light">Light</button>
  )
}

export default function Nav ({ setIsModalShown }) {
  const { settings, updateSettings } = useContext(SettingsContext)
  const { isDarkMode } = settings

  const navClassName = 'navbar'.concat(isDarkMode ? ' has-background-black' : '')

  const style = {
    cursor: 'pointer',
    fill: '#CCCCCC',
    width: '4 rem'
  }
  return (

    <nav className={navClassName} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item" style={style} onClick={() => setIsModalShown(true) }>
          <GearIcon />
        </span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">

            <div className="toggleTheme" onClick={() => toggleThemeMode(settings, updateSettings)}>
              { isDarkMode ? <DarkButton/> : <LightButton/> }
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  setIsModalShown: PropTypes.func
}
