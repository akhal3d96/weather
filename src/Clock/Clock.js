import React, { useState, useEffect } from 'react'
import ClockDigit from './ClockDigit'

export default function Clock () {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  },
  [])
  return (
    <section>
      <div className="columns has-text-centered is-family-sans-serif">
        <ClockDigit digits={now.getHours()}/>
        <ClockDigit digits={now.getMinutes()}/>
        <ClockDigit digits={ now.getSeconds()}/>
      </div>
    </section>
  )
}
