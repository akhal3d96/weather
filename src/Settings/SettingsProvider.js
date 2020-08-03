import PropTypes from 'prop-types'
import React, { useState } from 'react'
import SettingsContext from './SettingsContext'
import { loadSettings, saveSettings } from './settings_operations'
import config from '../config'

function updateSettingsMaker (setSettings) {
  return settings => {
    setSettings(settings)
    saveSettings(settings)
  }
}

export default function SettingsProvider ({ children }) {
  const defaultSettings = config.defaultSettings

  const savedSettings = loadSettings(defaultSettings)

  const [settings, setSettings] = useState(savedSettings)
  const updateSettings = updateSettingsMaker(setSettings)

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      { children }
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = {
  children: PropTypes.array
}
