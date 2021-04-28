import { useState, useEffect } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [api]);

  return { data, loading, error };
};

export default useFetch;
