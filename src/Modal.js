import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import Settings from './Settings'

export default function Modal ({ setIsModalShown }) {
  const settingsDiv = document.getElementById('settings')

  return ReactDOM.createPortal(
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button className="delete" aria-label="close" onClick={() => setIsModalShown(false)}/>
        </header>
        <section className="modal-card-body">
          <Settings />
        </section>
      </div>
    </div>,
    settingsDiv
  )
}

Modal.propTypes = {
  setIsModalShown: PropTypes.func
}
