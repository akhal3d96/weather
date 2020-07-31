import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import apiBuilder from '../api_builder'
import config from '../config'
import selectWeatherIcon from '../icon'
import WeatherInfo from './weather_info'

export default function WeatherNow ({ units, location }) {
  const imageStyle = { margin: 'auto' }

  const [weather, setWeather] = useState(new WeatherInfo())

  useEffect(() => {
    const endpoint = apiBuilder('weather', { q: location, units, appid: config.OPENWEATHER_API_KEY })
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const temperature = parseInt(data.main.temp)
        const description = data.weather[0].description
        const code = data.weather[0].id
        const icon = selectWeatherIcon(code)

        setWeather(new WeatherInfo(temperature, description, icon, 'Now'))
      })
      .catch(() => {})
  }, [units, location])

  return (
    <div className="column">

      <div className='has-text-centered is-family-sans-serif'>
        <figure className="image is-128x128 mb-2" style={imageStyle}>
          <img src={weather.icon} alt={weather.describtion}/>
        </figure>
        <h1 className="is-size-3 has-text-weight-bold">{weather.temperature}</h1>
        <h3 className="has-text-weight-light is-size-2">{weather.day}</h3>

      </div>
    </div>
  )
}

WeatherNow.propTypes = {
  units: PropTypes.string,
  location: PropTypes.string
}
