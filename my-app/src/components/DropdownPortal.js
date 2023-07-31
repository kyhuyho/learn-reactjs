import { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";
const DropdownPortal = () => {
  const { nodeRef, show, setShow } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="p-5">
      <div className="relative w-full max-w-[500px]" ref={nodeRef}>
        <div
          className="w-full p-5 border border-gray-500 rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          Selected
        </div>
        {show && <DropdownList coords={coords}></DropdownList>}
      </div>
    </div>
  );
};
const DropdownList = ({ coords }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full bg-white border border-gray-500 rounded-lg top-full"
      style={{
        left: coords.left,
        width: coords.width,
        top: coords.top + coords.height + window.scrollY,
      }}
    >
      <div className="p-5 cursor-pointer">JavaScript</div>
      <div className="p-5 cursor-pointer">ReactJS</div>
      <div className="p-5 cursor-pointer">VueJS</div>
      <div className="p-5 cursor-pointer">AngularJS</div>
    </div>,
    document.querySelector("body")
  );
};
export default DropdownPortal;
