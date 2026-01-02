
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
    <div>
      <h2 className="text-2xl mb-4 mt-4">Login</h2>
      <div className="flex gap-2 items-center justify-center">
      <input className="border bg-white text-black rounded p-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="border bg-white text-black rounded p-1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="border bg-white text-black rounded p-1" onClick={handleLogin}>Login</button>
       </div>
       <p className="mt-4">You must Register First then login with same email and password</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
     
    </div>
  );
};

export default Login;
