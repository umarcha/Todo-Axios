import axios from 'axios';
import { useState } from 'react'

const AddTodo = ({ newData }) => {

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://todo-backend.cyclic.app/add-todo', { title: todo, status: false })
      .then((response) => {
        updateData()
      })
      .catch((error) => {
        console.log(error);
      });
    setTodo("")
  }

  const updateData = () => {
    axios.get("https://todo-backend.cyclic.app/get-todo")
      .then((response) => {
        newData(response.data?.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="px-6 py-8 shadow-lg rounded-xl w-full max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <input type="text" className="block outline-none border border-gray-400 rounded h-9 w-full px-2"
          onChange={(e) => setTodo(e.target.value)}
          required
          value={todo}
        />
        <button type="submit" className="mt-4 px-4 py-2 block mx-auto w-fit rounded font-semibold text-base leading-5 text-white bg-teal-600">
          {/* {isLoading ? " Loading..." : "Add Todo"} */}
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
