import React from 'react'
import Context from '../context/Context.js'

export default function Palette() {
  const { lightColor, setLightColor } = React.useContext(Context)

  return (
    <div className="mt-2">
      <input
        type="color"
        style={{ width: '100px', height: '50px' }}
        value={lightColor}
        onChange={(event) => { setLightColor(event.target.value) }}
      />
    </div>
  )
}