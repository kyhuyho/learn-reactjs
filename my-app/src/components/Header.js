import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const hanldeFixedHeader = () => {
      // console.log("Fixed");
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", hanldeFixedHeader);
    return () => {
      window.removeEventListener("scroll", hanldeFixedHeader);
    };
  }, []);
  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
