import React from 'react'
import PropTypes from 'prop-types'

export default function Weather ({ minTemperature, maxTemperature, day, describtion, icon }) {
  minTemperature = parseInt(minTemperature)
  maxTemperature = parseInt(maxTemperature)

  const imageStyle = { margin: 'auto' }

  return (
    <div className="column">
      <div className='container is-family-sans-serif has-text-centered'>
        <figure className="image is-64x64" style={imageStyle}>
          <img src={icon} alt={describtion}/>
        </figure>
        <div className="container">
          <div className="columns">
            <h1 className="column is-size-4 has-text-weight-medium">{minTemperature}</h1>
            <h1 className="column is-size-4 has-text-weight-medium has-text-grey">{maxTemperature}</h1>
          </div>
          <h3 className="has-text-weight-light is-size-3">{day}</h3>
        </div>
      </div>
    </div>
  )
}

Weather.propTypes = {
  minTemperature: PropTypes.number,
  maxTemperature: PropTypes.number,
  day: PropTypes.string,
  describtion: PropTypes.string,
  icon: PropTypes.string
}
