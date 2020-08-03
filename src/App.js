import React, { useState } from 'react'
import './App.scss'
import City from './City'
import Clock from './Clock'
import Day from './Day'
import Modal from './Modal'
import Nav from './Nav'
import { SettingsProvider } from './Settings'
import { WeatherPanel } from './Weather'

function App () {
  const [isModalShown, setIsModalShown] = useState(false)

  return (
    <SettingsProvider>
      <Nav setIsModalShown={setIsModalShown}/>
      <div className="container">
        <Clock/>
        <Day/>
        <WeatherPanel/>
        <City/>
        {isModalShown && <Modal setIsModalShown={setIsModalShown}/>}
      </div>
    </SettingsProvider>

  )
}

export default App
