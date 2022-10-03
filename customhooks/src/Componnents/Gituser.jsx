import React from 'react'
import useFetch from "../Hooks/Fetch"
import styles from "../Git.module.css"
const Gituser = () => {

const{data,loading,error}=useFetch()
  return (
    <div>
      Gituser
<div className={styles.gituser}>
{data?.map((e)=>(
  <div key={e.id}>
<h2>{e.login}</h2>
<img src={e.avatar_url} alt="" className={styles.avatarurl} />

  </div>
))}

</div>


    </div>
    
  )
}

export default Gituser