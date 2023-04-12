import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import useHover from "../hooks/useHover";
const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && (
        <TooltipContent children={children} coords={coords}></TooltipContent>
      )}
      <span
        className="font-semibold cursor-pointer"
        ref={nodeRef}
        onMouseOver={handleHover}
      >
        {text}
      </span>
    </div>
  );
};
const TooltipContent = ({ children, coords }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-xl absolute -translate-x-1/2 -translate-y-full max-w-[300px]"
      style={{
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
};
export default Tooltip;
