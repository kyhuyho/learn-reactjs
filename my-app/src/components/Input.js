import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "red";
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border=gray-200 focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
