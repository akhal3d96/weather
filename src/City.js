import React, { useContext } from 'react'
import { SettingsContext } from './Settings'

export default function City () {
  const { settings } = useContext(SettingsContext)
  const { location, isDarkMode } = settings

  const footerTextClassName = 'has-text-centered is-family-sans-serif is-size-4'
    .concat(' ', isDarkMode ? 'has-text-light' : 'has-text-dark')

  const footerClassName = 'footer'.concat(isDarkMode ? ' has-background-black' : ' has-background-white')

  return (
    <footer className={footerClassName}>
      <div>
        <h4 className={footerTextClassName}>
          {location}
        </h4>
      </div>
    </footer>

  )
}
