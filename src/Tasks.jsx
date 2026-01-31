


import React, { useState, useEffect } from "react";
import axiosInstance from "./AxiosInstance";
// import task from "../../Back-end/models/task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

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
    setEditText("");
  } catch (err) {
    alert(err.response?.data?.message || "Cannot update task");
  }
};



  return (
    <div>
      <h2 className="mb-2 mt-1 text-2xl text-blue-600 font-bold">Tasks</h2>
      <p className="text-red-500 mb-2">You have to login to enter tasks other wise Tasks won't add </p>


      <input className="border-blue-600 border-[1.5px] text-black bg-white cursor-pointer  rounded p-1"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-700 border-[1.5px] text-white  rounded p-1 ml-2 cursor-pointer" onClick={addTask}>Add Task</button>



      {/* <ul className="text-xl">

        {tasks.map((t) => (
          <li className="mt-4 " key={t._id}>
            {t.title}{" "}

            
            <button onClick={() => handleEdit(task)}>Edit</button>

            <button className="bg-white text-black rounded p-1 cursor-pointer" onClick={() => deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul> */}




{tasks.map((task) => (
  <div key={task._id}>
    {editId === task._id ? (
      <>
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={() => setEditId(null)}>Cancel</button>
      </>
    ) : (
      <>
        <span>{task.title}</span>
        <button onClick={() => handleEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task._id)}>Delete</button>
      </>
    )}
  </div>
))}

  

         
      {/* {tasks.map((task) => (
        <div id={task.id}>

        </div>
      ))} */}  
  
             


    </div>
  );
};

export default Tasks;
