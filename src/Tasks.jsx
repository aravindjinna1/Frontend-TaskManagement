


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
    <div className="flex flex-col items-center justify-center mt-15 md:mt-auto">
      <h2 className="mb-2 mt-1 text-2xl text-blue-600 font-bold">Tasks</h2>
      <p className="text-red-500 mb-2">You have to login to enter tasks other wise Tasks won't add </p>

      <div>
      <input className="border-blue-600 border-[1.5px] text-black bg-white cursor-pointer  rounded p-1"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-700 border-[1.5px] text-white  rounded p-1 ml-2 cursor-pointer" onClick={addTask}>Add Task</button>
      </div>


      {/* <ul className="text-xl">

        {tasks.map((t) => (
          <li className="mt-4 " key={t._id}>
            {t.title}{" "}

            
            <button onClick={() => handleEdit(task)}>Edit</button>

            <button className="bg-white text-black rounded p-1 cursor-pointer" onClick={() => deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul> */}



<div className=" shadow-[0_10px_25px_rgba(0,0,0,0.12)] pl-20 pr-20 bg-white rounded-2xl  p-4 mt-4 max-w-300 grid place-items-center">
{tasks.map((task) => (
  <div key={task._id} >
    {editId === task._id ? (
      <div className="flex gap-2 justify-center items-center mt-2">
        <input className="border-blue-600 border-[1.5px] text-black bg-white cursor-pointer  rounded p-1 "
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleUpdate}  className=" cursor-pointer bg-green-500 p-2 rounded">Update</button>
        <button onClick={() => setEditId(null)} className="cursor-pointer bg-red-500 p-2 rounded">Cancel</button>
      </div>
    ) : (
      <div className=" flex justify-center items-center gap-4 mt-3 ">
        <span className="text-blue-600">{task.title}</span>
        <button onClick={() => handleEdit(task)} className=" cursor-pointer bg-green-500 p-2 rounded ">Edit</button>
        <button onClick={() => deleteTask(task._id)} className=" cursor-pointer bg-red-500 p-2 rounded">Delete</button>
      </div>
    )}
    
  </div>
))}
</div>

  

         
      {/* {tasks.map((task) => (
        <div id={task.id}>

        </div>
      ))} */}  
  
             


    </div>
  );
};

export default Tasks;
