import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setTextareaHeight("auto");
    setParentHeight(`${textareaRef.current.scrollHeight}px`);
    setText(e.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    setParentHeight(`${textareaRef.current.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="w-full max-w-[400px] p-5 overflow-hidden rounded-lg border border-gray-500 resize-none focus:border-blue-500 transition-all"
        placeholder="Please your enter content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
