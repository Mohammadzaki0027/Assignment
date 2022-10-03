import React from 'react'
import axios from 'axios'
const useFetch = () => {

const[data,setData]=React.useState([])

const getdata=()=>{
let r=axios.get(`http://localhost:8080/country`).then((r)=>{
setData(r.data)

}).catch((ERR)=>{
  console.log(ERR);
})
}



React.useEffect(()=>{
    getdata()
},[])
  return data
}

export default useFetch