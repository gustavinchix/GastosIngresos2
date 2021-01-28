import React from 'react'
import Control from './Control.jsx'

import ContextProvider from '../context/Provider.js'

export default function Container() {
  return (
    <ContextProvider>
      <div className="container">
        <Control />
      </div>
    </ContextProvider>
  )
}