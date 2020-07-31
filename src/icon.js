import skyClear from './icons/skyClear.svg'
import skyClearNight from './icons/skyClearNight.svg'

import rain from './icons/rain.svg'
import rainNight from './icons/rainNight.svg'
import showerRain from './icons/showerRain.svg'

import fewClouds from './icons/fewClouds.svg'
import fewCloudsNight from './icons/fewCloudsNight.svg'

import clouds from './icons/clouds.svg'

import thunderstorm from './icons/thunderstorm.svg'
import snow from './icons/snow.svg'
import mist from './icons/mist.svg'

function isDayTime () {
  const hours = new Date().getHours()
  return hours > 6 && hours < 20
}

function isWithinRange (number, start, end) {
  if (number >= start && number < end) return true

  return false
}

export default function selectWeatherIcon (code, isDay) {
  if (isWithinRange(code, 200, 300)) return thunderstorm
  if (isWithinRange(code, 300, 500)) {
    if (isDayTime() || isDay) return rain
    return rainNight
  }
  if (isWithinRange(code, 500, 600)) return showerRain
  if (isWithinRange(code, 600, 700)) return snow
  if (isWithinRange(code, 700, 800)) return mist
  if (code === 800) {
    if (isDayTime() || isDay) return skyClear
    return skyClearNight
  }
  if (isWithinRange(code, 801, 803)) {
    if (isDayTime() || isDay) return fewClouds
    return fewCloudsNight
  }
  return clouds
}
