import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const respone = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(respone.data.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 1000);
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 bg-white rounded-lg shadow-md">
      <input
        type="text"
        className="block w-full p-5 mb-5 transition-all border border-gray-200 rounded-md focus:border-blue-500"
        placeholder="Typing your keyword..."
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 key={item.created_at} className="p-3 bg-gray-100 rounded-md">
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
