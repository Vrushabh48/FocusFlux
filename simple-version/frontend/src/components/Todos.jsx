import React, { useState } from 'react';

export function Todos({ todos }) {
    const [id, setId] = useState("");

    function handleCompleted(id){
            
        fetch('http://localhost:3000/completed', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
    }

  return (
    <div className="p-4 space-y-4">
      {todos.map((todo) => (
        <div key={todo._id} className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
          <h2 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.task}
          </h2>
          <button key={todo._id}
            className={`py-2 px-4 rounded ${todo.completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            onClick={() => handleCompleted(todo._id)}
          >
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
