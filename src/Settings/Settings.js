import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import SettingsContext from './SettingsContext'

function Radiobox ({ label, ...rest }) {
  return (
    <label className="radio">
      <input type="radio" {...rest}/>
      {label}
    </label>
  )
}

function chnageSettings (event, setSettings, prevSettings) {
  const type = event.target.type
  const name = event.target.name
  const value = type === 'checkbox' ? event.target.checked : event.target.value
  setSettings({ ...prevSettings, [name]: value })
}

export default function Settings () {
  const { settings, updateSettings } = useContext(SettingsContext)
  const { units, location, timeFormat, showSeconds } = settings

  return (
    <div>
      <form onChange={event => chnageSettings(event, updateSettings, settings)}>

        <div className="field">
          <label className="label">Location</label>
          <div className="control">
            <input className="input" name="location" type="text" placeholder="Weather location" defaultValue={location}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Time format</label>
          <div className="control">
            <Radiobox name="timeFormat" label='12 Hours (AM/PM)' value='12hours' defaultChecked={timeFormat === '12hours'}/>
            <Radiobox name="timeFormat" label='24 Hours' value='24hours' defaultChecked={timeFormat === '24hours'}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Units</label>
          <div className="control">
            <Radiobox name="units" label='C (metric)' value='metric' defaultChecked={ units === 'metric'}/>
            <Radiobox name="units" label='F (imperial)' value='imperial' defaultChecked={ units === 'imperial'}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Other options</label>
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" name="showSeconds" checked={showSeconds}/>
                Show seconds
            </label>
          </div>
        </div>

      </form>

    </div>
  )
}

Radiobox.propTypes = {
  label: PropTypes.string
}
