import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
  return state;
};
const HackerNewsWithReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const respone = await axios.get(state.url);
      dispatch({ type: "SET_DATA", payload: respone.data.hits || [] });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ERROR", payload: `The error happend ${error}` });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5 focus:border-blue-500 transition-all"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-500 text-white p-5 rounded-md font-semibold flex-shrink-0"
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-500">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsWithReducer;
