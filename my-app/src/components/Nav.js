import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const listLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog1",
    title: "Blog",
  },
  {
    id: 3,
    to: "/contact",
    title: "Contact",
  },
];
const Nav = () => {
  return (
    <>
      <div className="p-5 font-semibold bg-white shadow-md flex items-center justify-center gap-x-5">
        {listLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            {item.title}
          </NavLink>
        ))}
        <Link to={"/profile"}>Profile</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
