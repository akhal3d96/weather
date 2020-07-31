import React, { useEffect, useState } from 'react'
import apiBuilder from '../api_builder'
import config from '../config'
import Weather from './Weather'
import selectWeatherIcon from '../icon'
import PropTypes from 'prop-types'

function epochToDayName (epoch) {
  const day = new Date(epoch * 1000) // To millisceonds
  const locals = 'en-GB'
  const options = { weekday: 'long' }
  return day.toLocaleDateString(locals, options)
}

export default function WeatherForecast ({ units, location }) {
  const [weatherForecast, setWeatherForecast] = useState([])

  useEffect(() => {
    const endpoint = apiBuilder('forecast', { q: location, units, appid: config.OPENWEATHER_API_KEY })
    const forecastList = []
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const list = data.list
        const todaysWeatherInfo = list[0]
        for (
          let i = 0, dayTime = todaysWeatherInfo.dt;
          i <= 4;
          dayTime = (24 * 60 * 60) * i, i++
        ) {
          const nextDayWeatherInfo = list.find(weatherData => weatherData.dt >= todaysWeatherInfo.dt + dayTime)
          nextDayWeatherInfo && forecastList.push(nextDayWeatherInfo)
        }
        setWeatherForecast(forecastList)
      })
      .catch(() => {})
  }, [units, location])
  return (
    weatherForecast.map(weatherForecastDay =>
      (<Weather
        key={weatherForecastDay.dt}
        maxTemperature={weatherForecastDay.main.temp_max}
        minTemperature={weatherForecastDay.main.temp_min}
        describtion={weatherForecastDay.weather[0].description}
        icon={selectWeatherIcon(weatherForecastDay.weather[0].id, true)}
        day={epochToDayName(weatherForecastDay.dt)}
      />)
    )
  )
}

WeatherForecast.propTypes = {
  units: PropTypes.string,
  location: PropTypes.string
}
