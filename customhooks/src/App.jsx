import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Timer from './Componnents/Timer'
import Timersecond from './Componnents/Timersecond'
import Gituser from './Componnents/Gituser'
import GitInput from './Componnents/GitInput'
import styles from "./Git.module.css"

function App() {
  const [ready, setReady] = useState(false)

  return (
    <div className={styles.app}>

      React App Working Perfectly
 {/* <Gituser></Gituser> */}
      <Timer></Timer>
      <Timersecond></Timersecond>
      <GitInput></GitInput>
    </div>
  )
}

export default App
