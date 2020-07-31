const SETTINGS_KEY = 'settings'

function saveSettings (settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

function loadSettings (defaultSettings) {
  const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY))
  if (settings) {
    return settings
  }

  saveSettings(defaultSettings)
  return defaultSettings
}

export { loadSettings, saveSettings }
