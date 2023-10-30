"use client";
import Link from "next/link";
import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLinks from "./NavbarLinks";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  return (
    <div className="w-full flex items-center justify-between py-[6vw] px-[5vw] md:px-[4vw] md:py-[2vw]">
      <div>
        <Link href={`/`} className="font-bold text-2xl uppercase">
          RoamLust
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <NavbarLinks />
        <Hamburger handleClick={handleClick} click={click} />
      </div>
    </div>
  );
};

export default Navbar;
