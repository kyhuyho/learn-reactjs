import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const HackerNews2 = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
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
      setTimeout(() => {
        if (!isMounted.current) {
          setHits(respone.data.hits || []);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-500"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.created_at} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews2;
