import React from 'react'

const useTimeout = (delay) => {
  const [ready,setReady]=React.useState(false)

 React.useEffect(() => {
   
  let timer =setTimeout(() => {
    setReady(true)
  }, delay);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  return ready
}

export default useTimeout