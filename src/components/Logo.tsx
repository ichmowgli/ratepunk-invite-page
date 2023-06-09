"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/logo.svg"
      alt="logo"
      className="cursor-pointer"
      width="125"
      height="32"
    ></Image>
  );
};

export default Logo;
