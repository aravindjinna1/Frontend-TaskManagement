


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
      <h2 className="mb-4 mt-4 text-2xl ">Tasks</h2>
      <input className="bg-white text-black rounded p-1"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-white text-black rounded p-1 ml-2" onClick={addTask}>Add Task</button>

      <ul className="text-xl">
        {tasks.map((t) => (
          <li className="mt-4 " key={t._id}>
            {t.title}{" "}
            <button className="bg-white text-black rounded p-1" onClick={() => deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
