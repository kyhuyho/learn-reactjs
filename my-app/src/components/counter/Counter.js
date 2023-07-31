import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  // return <div onClick={handleIncrement}>Increment {count}</div>;

  const [info, setInfo] = useState({
    firstname: "ho",
    lastname: "huy",
  });
  useEffect(() => {
    // console.log(count);
    // setCount(count + 1);
    console.log("from input");
  }, [info.lastname]);
  return (
    <div className="p-5 flex items-center gap-x-4">
      <input
        type="text"
        name="firstName"
        value={info.firstname}
        onChange={(e) => setInfo({ ...info, firstname: e.target.value })}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="inline-block p-3 bg-green-500 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
