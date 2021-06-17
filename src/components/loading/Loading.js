import React from 'react'

export const Loading = () => {
  return (
    <div className="loading__main-container">
      <div>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <p className="loading__text">Loading, please wait...</p>
      </div>
    </div>
  )
}
