import React from "react";

function Addtask() {
  const d = new Date();

  return (
    <div className="grid grid-cols-1 gap-10 shadow-lg pl-7 pr-7 pb-5">
      <h1 className="text-3xl font-bold">Add New Task : </h1>

      <input type="text" placeholder="New Task" className="focus:outline-none focus:ring focus:border-blue-500 rounded" />

      <input
        type="text"
        placeholder="Deadline"
        className="focus:outline-none focus:ring focus:border-blue-500 rounded"
      />
      <button>Add Task</button>
    </div>
  );
}

export default Addtask;
