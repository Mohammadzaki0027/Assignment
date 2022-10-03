import React, { useState } from "react";
import axios from "axios";
const useFetch = (query) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
 const getuser =() => {

    axios.get(`https://api.github.com/search/users?q=${query}`)
      .then((r) => {

        setData(r.data.items)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
getuser()
  }, [query]);
  return { data, loading, error };
};

export default useFetch;
