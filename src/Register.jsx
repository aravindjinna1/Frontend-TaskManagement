// src/Register.jsx
import React, { useState } from "react";
import axiosInstance from "./AxiosInstance";

const Register = ({ setLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axiosInstance.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      // Optional: automatically login after registration if backend returns token
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setLoggedIn(true);
      }

      alert("Registration successful! Please login.");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 mt-4">Register</h2>
            <div className="flex gap-2 items-center justify-center">

      <input require className="border bg-white text-black rounded p-1"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input required className="border bg-white text-black rounded p-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input required className="border bg-white text-black rounded p-1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select  className="border bg-white text-black rounded p-1" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button  className="border bg-white text-black rounded p-1" onClick={handleRegister}>Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
