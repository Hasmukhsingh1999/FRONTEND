import Link from "next/link";
import React from "react";

const NavbarLinks = () => {
  return (
    <div className="hidden md:flex  items-center gap-4">
        <Link className="text-sm  font-semibold" href="/">Home</Link>
      <Link className="text-sm  font-semibold" href="/Form">
        Form
      </Link>
      <Link className="text-sm font-semibold" href="/TicketPage">
        Ticket
      </Link>
      <Link className="text-sm font-semibold" href="">
        Content
      </Link>
    </div>
  );
};

export default NavbarLinks;
