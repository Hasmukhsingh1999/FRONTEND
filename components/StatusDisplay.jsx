import React from 'react'
const statusColors = {
  done: "bg-green-200",
  started: "bg-yellow-200",
  "not started": "bg-red-200",
};

const StatusDisplay = ({status}) => {
  const color = statusColors[status] || "bg-slate-700 text-white";

  if (!status) {
    return null; // Or provide a default behavior
  }
  return (
    <div className="mt-3">
      <span
        className={`inline-block rounded-full px-2 py-1 text-xs font-bold text-gray-700 ${color}`}
      >
        {status}
      </span>
    </div>
  )
}

export default StatusDisplay