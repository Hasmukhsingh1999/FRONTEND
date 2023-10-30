import React from 'react'
import Link from "next/link"
import PriorityDisplay from './PriorityDisplay'
import DeleteBlock from './DeleteBlock'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'

const TicketBlock = ({ticket}) => {
  return (
    <div className="w-full flex-col   rounded-md shadow-lg p-3 m-2 ">
    <div className="flex mb-3 ">
      <PriorityDisplay priority={ticket.priority} />
      <div className="ml-auto">
        <DeleteBlock id={ticket._id} />
      </div>
    </div>
    <Link href={`TicketPage/${ticket._id}`} style={{display:'contents'}}>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow">
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">
              {new Date(ticket.createdAt).toLocaleString()}
            </p>

            <ProgressDisplay progress={ticket.progress} />
          </div>
        </div>
      </div>
      <div className="ml-auto flex items-end">
        <StatusDisplay status={ticket.status} />
      </div>
    </Link>
  </div>
  )
}

export default TicketBlock