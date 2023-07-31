import React, { useEffect, useRef, useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");
  const { data, loading, errorMessage, setUrl } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
  console.log(data);
  return (
    <div className="p-5">
      <div className="flex gap-x-4">
        <input
          type="text"
          className="border border-gray-500 p-3 w-[500px]"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-3 text-xl"
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetch
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>
      )}
      <p>{errorMessage}</p>
      {!loading &&
        data.hits.length > 0 &&
        data.hits.map((item) => <h3 key={item.created_at}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNewsWithHook;
