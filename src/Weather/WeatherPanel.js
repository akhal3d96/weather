import React, { useContext } from 'react'
import { SettingsContext } from '../Settings'
import WeatherForecast from './WeatherForecast'
import WeatherNow from './WeatherNow'

export default function Weather () {
  const { settings } = useContext(SettingsContext)
  const { units, location } = settings

  const searchLocation = location.replace(/\s/g, '')

  return (
    <section>
      <div className="columns is-vcentered is-centered mb-2">
        <WeatherNow units={units} location={searchLocation}/>
        <WeatherForecast units={units} location={searchLocation} />
      </div>
    </section>
  )
}
