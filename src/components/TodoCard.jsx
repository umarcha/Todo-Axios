import axios from "axios";

const TodoCard = ({ item, newData }) => {

  const updateStatus = (e) => {
    const status = e.target.checked;
    axios.patch(`https://todo-backend.cyclic.app/update/${item._id}`, { status: status })
      .then((response) => {
        updateData()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleDelete = () => {
    axios.delete(`https://todo-backend.cyclic.app/delete/${item._id}`)
      .then(() => {
        updateData()
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="px-4 py-6 rounded-md bg-white shadow-md">
      <div className="flex gap-3 justify-between items-center">
        <h5 className={`${item.status && 'line-through text-gray-400'}`}>{item.title}</h5>
        <input type="checkbox" checked={item.status}
          onChange={updateStatus}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 rounded-md px-3 py-2 text-xs text-white">
          {/* {isLoading ? "Deleting" : "Delete"} */}
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoCard