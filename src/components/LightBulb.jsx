import React from 'react'
import Context from '../context/Context.js'

export default function LightBulb(props) {
  const [on, setOn] = React.useState(false)

  const { lightColor, setLightColor, clickTimes, setClickTimes, defaultLightColor } = React.useContext(Context)

  React.useEffect(() => {
    setLightColor(props.color)
  }, [])

  const handleClick = () => {
    setOn(!on)
    setClickTimes(clickTimes + 1)
  }

  return (
    <div
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: on ? lightColor : defaultLightColor
      }}
      className="m-1 rounded-circle border"
      onClick={handleClick}
    />
  )
}