import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";
import axios from "axios";

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://todo-backend.cyclic.app/get-todo")
      .then((response) => {
        setData(response.data?.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const newData = (data) => {
    setData(data)
  }

  return (
    <main className="max-w-4xl mx-auto px-5">
      <AddTodo newData={newData} />
      <div className="grid grid-cols-2 gap-4 mt-12">
        {data?.map((item, index) => <TodoCard key={index} item={item} newData={newData} />)}
      </div>
    </main>
  )
}

export default App
