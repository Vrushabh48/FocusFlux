import React, { useState } from "react";

function InputBox() {
    const [task,setTask] = useState("");


  return (
    <div>
    <div className="p-14 flex justify-center items-center min-h-12">
  <div className="p-4 border-4 shadow-md flex flex-col items-center justify-center w-64 h-64">
    <h4 className="text-lg font-medium">Write your Task Below:</h4>
    <br />
    <input className="border-2" type="text" placeholder="Task" onChange={function(e){
        const value = e.target.value;
        setTask(e.target.value);
    }}/>
    <br />
    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    onClick={() => {
        // axios
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                task: task,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(async function(res) {
                const json = await res.json();
                alert("Todo added");
            })
    }}>Add Task</button>   
  </div>
</div>
</div>

  );
}

export default InputBox;
