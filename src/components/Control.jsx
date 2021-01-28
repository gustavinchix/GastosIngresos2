import React from 'react'

import LightBulb from './LightBulb.jsx'
import Palette from './Palette.jsx'
import Counter from './Counter.jsx'

export default function Control() {
  return (
    <div className="border m-4 p-4 d-flex justify-content-around align-items-center">
      <LightBulb color={'#00FF00'} />
      <Palette />
      <Counter />
    </div>
  )
}