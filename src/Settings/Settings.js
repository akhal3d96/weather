import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import SettingsContext from './SettingsContext'

function Radiobox ({ label, ...rest }) {
  return (
    <label className="radio">
      <input type="radio" name="units" {...rest}/>
      {label}
    </label>
  )
}

function chnageSettings (event, setSettings, prevSettings) {
  const name = event.target.name
  const value = event.target.value

  setSettings({ ...prevSettings, [name]: value })
}

export default function Settings () {
  const { settings, updateSettings } = useContext(SettingsContext)
  const { units, location } = settings

  return (
    <div>
      <form onChange={event => chnageSettings(event, updateSettings, settings)}>

        <div className="field">
          <label className="label">Units</label>
          <div className="control">
            <Radiobox label='C (metric)' value='metric' defaultChecked={ units === 'metric'}/>
            <Radiobox label='F (imperial)' value='imperial' defaultChecked={ units === 'imperial'}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Location</label>
          <div className="control">
            <input className="input" name="location" type="text" placeholder="Weather location" defaultValue={location}/>
          </div>
        </div>

      </form>

    </div>
  )
}

Radiobox.propTypes = {
  label: PropTypes.string
}
