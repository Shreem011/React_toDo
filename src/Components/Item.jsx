import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const Item = (props) => {
  const [taskDone, setTaskDone] = useState(false);
  return (
    <div
      className="cursor-pointer select-none w-full border-b p-3 flex justify-between items-center"
      onClick={() => setTaskDone(!taskDone)}
    >
      <div>
        <span className="pr-2 text-[14px] text-gray-400">{props.time}</span>
        <span
          className={` ${taskDone === true ? "line-through" : ""} text-[20px]`}
        >
          {props.item}
        </span>
      </div>
      <div
        className={` ${
          taskDone === false ? " " : "line-through"
        } text-[#e74c3c]`}
        onClick={() => props.removeHandler(props.id)}
      >
        <BsTrash />
      </div>
    </div>
  );
};

export default Item;
