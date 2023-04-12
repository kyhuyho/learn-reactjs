import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);
  const handleFetchData = useRef({});
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const respone = await axios.get(url);
      if (isMounted.current) {
        setData(respone.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    data,
    setUrl,
    loading,
    errorMessage,
  };
}
