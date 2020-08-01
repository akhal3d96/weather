import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../Settings'
import Hours12 from './Hours12'
import Hours24 from './Hours24'

export default function Clock () {
  const [now, setNow] = useState(new Date())

  const { settings } = useContext(SettingsContext)
  const { timeFormat, showSeconds } = settings

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  },
  [showSeconds])
  return (
    <section>
      <div className="columns has-text-centered is-family-sans-serif">
        { timeFormat === '24hours'
          ? <Hours24 date={now} showSeconds={showSeconds}/>
          : <Hours12 date={now} showSeconds={showSeconds}/>
        }
      </div>
    </section>
  )
}
