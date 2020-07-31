import React, { useContext } from 'react'
import { SettingsContext } from './Settings'

export default function City () {
  const { settings } = useContext(SettingsContext)
  const { location } = settings

  return (
    <div>
      <h4 className="has-text-centered
      is-family-sans-serif
      is-size-4
      has-text-dark">
        {location}
      </h4>
    </div>
  )
}
