import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import InputBox from './components/InputBox'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    });

  return (
    <div>
      <Navbar />
      <InputBox />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
