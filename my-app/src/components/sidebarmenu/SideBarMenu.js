import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const SideBarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutSideMenu = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches("button")
      )
        setShowMenu(false);
    };
    document.addEventListener("click", handleClickOutSideMenu);
    return () => document.removeEventListener("click", handleClickOutSideMenu);
  }, []);
  return (
    <div>
      <button
        onClick={() => setShowMenu(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-500"
      >
        Show menu
      </button>
      <div
        className={`w-[300px] bg-gray-300 fixed top-0 left-0 bottom-0 z-10 transition-all ${
          showMenu ? "" : "-translate-x-full"
        }`}
        ref={nodeRef}
      ></div>
    </div>
  );
};

export default SideBarMenu;
