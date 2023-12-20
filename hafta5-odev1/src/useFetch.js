import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (searchTerm) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&printType=books&orderBy=newest&maxResults=40`;

      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { data, loading, error };
};

export default useFetch;
