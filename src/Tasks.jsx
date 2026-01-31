


import React, { useState, useEffect } from "react";
import axiosInstance from "./AxiosInstance";
// import task from "../../Back-end/models/task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Cannot fetch tasks");
    }
  };

  const addTask = async () => {
    try {
      const res = await axiosInstance.post("/tasks", { title });
      setTasks([...tasks, res.data]);
      setTitle("");
      setLoading(true);

    } catch (err) {
      alert(err.response?.data?.message || "Cannot add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Cannot delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
        // setLoading(false);

  }, []);

const [editId, setEditId] = useState(null);
const [editText, setEditText] = useState("");


  const handleEdit = (task) => {
  setEditId(task._id);
  setEditText(task.title);
};


const handleUpdate = async () => {
  try {
    const res = await axiosInstance.put(`/tasks/${editId}`, {
      title: editText,
    });

    setTasks(tasks.map(task =>
      task._id === editId ? res.data : task
    ));

    setEditId(null);
    setLoading(false);

    setEditText("");
  } catch (err) {
    alert(err.response?.data?.message || "Cannot update task");
  }
};



  return (
    <div className="flex flex-col items-center justify-center mt-15 md:mt-5">
      <div className="">
      {/* <h2 className="mb-2 mt-1 text-2xl text-blue-600 font-bold">Tasks</h2> */}
      <p className="text-red-500 mb-2 text-[10px]">You have to login to enter tasks other wise Tasks won't add </p>
      {/* <p className="text-green-500 text-[15px]">"""After adding a task, it may take a few seconds for the data to be saved and fetched from the database. Please wait a moment""".</p> */}
  
      <div>
      <input className="border-blue-600 border-[1.5px] text-black bg-white cursor-pointer  rounded p-1"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-700 border-[1.5px] text-white  rounded p-1 ml-2 cursor-pointer" onClick={addTask}>Add Task</button>

      {loading &&(
        <p className="text-green-500 text-[15px]">Wait until fetch.</p>

      )}
      </div>
      </div>




<div className="mt-6 w-full max-w-3xl rounded-2xl bg-white p-4 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.12)]">
  <p className="mb-4 text-center text-orange-600 font-medium">
    You can edit the text after adding
  </p>

  <div className="space-y-3">
    {tasks.map((task) => (
      <div
        key={task._id}
        className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:shadow-md transition sm:flex-row sm:items-center sm:justify-between"
      >
        {editId === task._id ? (
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <input
              className="w-full flex-1 rounded-lg border border-blue-500 px-3 py-2 text-black outline-none focus:ring-2 focus:ring-blue-400"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />

            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="flex-1 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition"
              >
                Update
              </button>

              <button
                onClick={() => setEditId(null)}
                className="flex-1 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Task text */}
            <span className="break-words text-blue-600 font-medium sm:max-w-[70%]">
              {task.title}
            </span>

            {/* Buttons */}
            <div className="flex gap-3 self-end sm:self-auto">
              <button
                onClick={() => handleEdit(task)}
                className="rounded-lg bg-green-500 px-3 py-2 text-white hover:bg-green-600 transition"
                title="Edit"
              >
                ✏️
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600 transition"
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
</div>

  

         
      {/* {tasks.map((task) => (
        <div id={task.id}>

        </div>
      ))} */}  
  
             


    </div>
  );
};

export default Tasks;
