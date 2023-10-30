import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = ({ handleClick, click }) => {
  return (
    <div className="md:hidden visible relative">
      <GiHamburgerMenu onClick={handleClick} />
      {click && (
        <div className="bg-white  absolute right-0 flex flex-col w-[40vw] p-[4vw] gap-4 shadow-md">
          <Link className="text-sm  font-semibold" href="/" onClick={handleClick}>
            Home
          </Link>
          <Link className="text-sm  font-semibold" href="/Form" onClick={handleClick}>
            Form
          </Link>
          <Link className="text-sm font-semibold" href="/TicketPage" onClick={handleClick}>
            Ticket
          </Link>
          <Link className="text-sm font-semibold" href="" onClick={handleClick}>
            Content
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
