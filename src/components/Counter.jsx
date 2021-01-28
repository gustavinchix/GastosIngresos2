import React from 'react'
import Context from '../context/Context.js'

export default function Counter () {
  const { clickTimes } = React.useContext(Context)

  return (
    <div
      style={{width: '50px', height: '50px'}}
      className="text-center border lead text-bold p-1 mt-3"
    >
      { clickTimes }
    </div>
  )
}
