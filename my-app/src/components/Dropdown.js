import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowDropdown(false);
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  return (
    <div className="p-5">
      <div className="relative w-full max-w-[500px]" ref={dropdownRef}>
        <div
          className="p-5 border border-gray-500 rounded-lg w-full cursor-pointer"
          onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
        >
          Selected
        </div>
        {showDropdown && (
          <div className="border border-gray-500 rounded-lg absolute top-full left-0 w-full bg-white">
            <div className="p-5 cursor-pointer">JavaScript</div>
            <div className="p-5 cursor-pointer">ReactJS</div>
            <div className="p-5 cursor-pointer">VueJS</div>
            <div className="p-5 cursor-pointer">AngularJS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
