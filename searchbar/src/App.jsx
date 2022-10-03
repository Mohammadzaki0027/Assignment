import { useState } from 'react'
import Scrollbar from './Components/Scrollbar'
import Searchbar from './Components/Searchbar'

import styles from "./Styles.module.css"

function App() {


  return (
    <div className={styles.container}>

      <div className={styles.box}>
{/* <Searchbar></Searchbar> */}
<Scrollbar></Scrollbar>
      </div>
    </div>
  )
}

export default App
