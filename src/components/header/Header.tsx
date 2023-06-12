"use client";

import { useCallback, useState } from "react";

import Navbar from "./Navbar";
import Logo from "../Logo";
import Image from "next/image";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <nav className="border-b border-black">
      <div className="mx-auto flex max-w-544 items-center justify-between px-4 py-3 md:px-0 md:py-5 xl:max-w-1120">
        <Logo />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {isOpen ? (
            <Image
              src="/images/close.svg"
              alt="close"
              className="block cursor-pointer"
              width="16"
              height="16"
              onClick={toggleOpen}
            />
          ) : (
            <Image
              src="/images/Menu.svg"
              alt="Menu"
              className="block cursor-pointer"
              width="16"
              height="16"
              onClick={toggleOpen}
            />
          )}
        </button>
      </div>
      <div className="md:hidden">{showMobileMenu && <Navbar />}</div>
    </nav>
  );
}

export default Header;
