import React from "react";

import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="space-y-2 px-4 py-5 font-medium text-[#1f343e] md:space-x-5 md:space-y-0 md:px-0 md:py-0">
      <NavItem>Chrome Extension</NavItem>
      <NavItem>Price Comparison</NavItem>
      <NavItem>Blog</NavItem>
    </div>
  );
};

export default Navbar;
