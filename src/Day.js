import React from 'react'

function todaysFullDate () {
  const today = new Date()
  const locals = 'en-GB'
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return today.toLocaleDateString(locals, options)
}

export default function Day () {
  return (
    <section>
      <div className="has-text-centered is-family-sans-serif is-size-5 mb-3 mt-3">
        <h2 className="has-text-dark">{ todaysFullDate() }</h2>
      </div>
    </section>
  )
}
