"use client";
import TicketBlock from "@/components/TicketBlock";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [tickets, settickets] = useState([]);
  const uniqueCat = [...new Set(tickets?.map(({ category }) => category))];
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://backend-blond-mu.vercel.app/api/tickets/show-tickets"
        );
        settickets(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className="px-[4vw] ">
        {tickets &&
          uniqueCat?.map((uniqueCategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2 className="text-xl font-semibold uppercase">{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-4  xl:-mx-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketBlock
                      ticket={filteredTicket}
                      id={_index}
                      key={_index}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
