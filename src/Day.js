import React, { useContext } from 'react'
import { SettingsContext } from './Settings'

function todaysFullDate () {
  const today = new Date()
  const locals = 'en-GB'
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return today.toLocaleDateString(locals, options)
}

export default function Day () {
  const { settings } = useContext(SettingsContext)
  const { isDarkMode } = settings

  const dayTextClassName = isDarkMode ? 'has-text-light' : 'has-text-dark'
  return (
    <section>
      <div className="has-text-centered is-family-sans-serif is-size-5 mb-3 mt-3">
        <h2 className={dayTextClassName}>{ todaysFullDate() }</h2>
      </div>
    </section>
  )
}
