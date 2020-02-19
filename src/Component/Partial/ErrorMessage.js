import React from 'react'

export const ErrorMessage = ({ onClick, children }) =>
  <div>
    <h4>{children}</h4>
    <button onClick={onClick}>Retry</button>
  </div>
