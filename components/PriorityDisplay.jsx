import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const PriorityDisplay = ({ priority }) => {
  return (
    <div>
      <LocalFireDepartmentIcon
        className={` pr-1 ${
          priority > 0 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <LocalFireDepartmentIcon
        className={`pr-1 ${priority > 2 ? "text-red-400" : "text-slate-400"}`}
      />
      <LocalFireDepartmentIcon
        className={`pr-1 ${priority > 3 ? "text-red-400" : "text-slate-400"}`}
      />
      {/* <LocalFireDepartmentIcon
        className={`pr-1 ${priority > 4 ? "text-red-400" : "text-slate-400"}`}
      />
      <LocalFireDepartmentIcon
        className={`pr-1 ${priority > 5 ? "text-red-400" : "text-slate-400"}`}
      /> */}
    </div>
  );
};

export default PriorityDisplay;
