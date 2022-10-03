import React from "react";
import styles from "../Styles.module.css";
import useFetch from "./Fetch";
const Searchbar = () => {
  const data = useFetch();
const[filterdata,setFilterData]=React.useState([])

  const handlechange = (e) => {
 const searchdata=e.target.value

 const filterlist=data.filter((e)=>{
  return e.country.toLowerCase().includes(searchdata.toLowerCase())
 })
 setFilterData(filterlist)
  };


  return (
    <div className={styles.Searchbar}>
      <div className={styles.inputouter}>
        <div className={styles.input}>
          <input
            type="oninput"
            className={styles.inputcomp}
            placeholder="Search Country"
            onChange={handlechange}
          />
        <div className={styles.mapdiv}>

          {filterdata.length!==0&&filterdata.map((e,index)=>(
          <div key={index}><h2>{e.country}</h2></div>
          ))}
        </div>

        </div>
      </div>

   
    </div>
  );
};

export default Searchbar;
