// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Fetch = ({ path, children, page }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3${path}&${
    page ? `page=${page}&` : ""
  }api_key=0b9a6dbd65cb317d1b1cc380c3171fea`;
  const update = updateResults => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(url)
      .then(blob => blob.json())
      .then(newData => {
        newData.results =
          updateResults && data && data.results
            ? [...data.results, ...newData.results]
            : newData.results;
        setData(newData);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  };
  useEffect(() => {
    update(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  useEffect(() => {
    update(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return children({ data, isLoading });
};
export default Fetch;
