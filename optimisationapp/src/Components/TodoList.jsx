import React from 'react'
import { useMemo } from 'react'
const expensiveOperation=(ms)=>{
const start=Date.now()
while(Date.now()-start<ms){
    continue
}
return true
}
const TodoList = ({id,title,status,handledelet,handletoggle}) => {

console.log(id,status);
const isdone=useMemo(()=>expensiveOperation(200),[]
 ) 
 return (
    <div>

        <h5>{title}</h5>
 <h2>{status?"true":"false"}</h2>
        <button onClick={()=>handledelet(id)}>Delet</button>
        <button onClick={()=>handletoggle(id)}>Toggle</button>
    </div>
  )
}
// const shallowEqual=(prevProps,currProps)=>{
    
//     return (
//         prevProps.id===currProps.id&&prevProps.status===currProps.status
//     )
// }
 export default (TodoList) //for use callback
// export default React.memo(TodoList,shallowEqual)