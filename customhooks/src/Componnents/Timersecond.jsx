import React from 'react'
import useTimeout from "../Hooks/Timeout"
const Timersecond = () => {
    const ready=useTimeout(1000)
  return (
    <div>{ready?"This is timer second":"Not timer is ready"}</div>
  )
}

export default Timersecond