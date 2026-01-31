


import React, { useState, useEffect } from "react";
import axiosInstance from "./AxiosInstance";

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

      <ul className="text-xl">
        {tasks.map((t) => (
          <li className="mt-4 " key={t._id}>
            {t.title}{" "}
            <button className="bg-white text-black rounded p-1 cursor-pointer" onClick={() => deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
