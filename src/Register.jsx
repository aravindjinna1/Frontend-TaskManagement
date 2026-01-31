
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
    <div className="grid place-items-center relative top-[] mt-15 md:mt-auto">
      <h2 className="text-2xl mb-4 mt-4 text-blue-600 font-bold">Register</h2>
            <div className="flex bg-white max-w-100 items-center justify-center  flex-col gap-2 items-center justify-center  shadow-[0_10px_25px_rgba(0,0,0,0.12)] pl-20 pr-20 bg-white rounded-2xl">

      <input required className="border-blue-600 mt-6 border-[1.5px] bg-white text-black rounded p-1 "
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input required className="border-blue-600 border-[1.5px] bg-white text-black rounded p-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input required className="border-blue-600 border-[1.5px] bg-white text-black rounded p-1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mb-4">
      <select  className="border-blue-600 border-[1.5px] bg-white text-black rounded p-1" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button  className="bg-blue-700 border-[1.5px] cursor-pointer text-white font-semibold rounded p-1" onClick={handleRegister}>Register</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
