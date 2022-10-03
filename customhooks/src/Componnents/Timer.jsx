import React from 'react'
import useTimeout from '../Hooks/Timeout'
const Timer = () => {
    const ready=useTimeout(1000)
    console.log(ready);
  return (
    <div>{ready?"Timer is Ready":"Timer is Not ready"}</div>
  )
}

export default Timer