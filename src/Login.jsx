
import React, { useState } from "react";
import axiosInstance from "./AxiosInstance";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

     
      console.log(res.data.token);
      
      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
      setError("");
      alert("Login successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl mb-4 mt-4 text-blue-600 font-bold">Login</h2>
      <div className="flex gap-2 items-center justify-center md:flex-row flex-col">
      <input className="border-blue-600 border-[1.5px] text-black bg-white cursor-pointer  rounded p-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="border-blue-600 border-[1.5px]  bg-white cursor-pointer text-black rounded p-1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 border-[1.5px]   cursor-pointer  rounded p-1" onClick={handleLogin}>Login</button>
       </div>
       <p className="mt-4 text-red-500">You must Register First then login with same email and password</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
     
    </div>
  );
};

export default Login;
