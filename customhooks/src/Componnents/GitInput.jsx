import React from "react";
import useFetch from "../Hooks/Fetch";
import styles from "../Git.module.css";
import Gituser from "./Gituser";
const GitInput = () => {
  const [query, setQuery] = React.useState("albert");
  const { data, loading, error } = useFetch(query);

  // console.log(data);
  const handlechange = (e) => {
    setQuery(e.target.value);

 
  };

  React.useEffect(() => {
  
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Git User"
        onChange={handlechange}

      />


      <br />

      <div className={styles.gituser}>
        {data.length !== 0 &&
          data?.map((e) => (
            <div key={e.id}>
              <h2>{e.login}</h2>
              <img src={e.avatar_url} alt="" className={styles.avatarurl} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GitInput;
