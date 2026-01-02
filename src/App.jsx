

import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Tasks from "./Tasks";
import AdminPanel from "./AdminPanel";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} >
      <h1 className="text-4xl mb-5">Task App</h1> 
     
      <Routes>
        <Route 
          path="/"
          element={
            <div >
                            <div  className="flex flex-row gap-5 justify-center items-center">

              <Link to="/register">
                <button className="border">Register</button>
              </Link>
              <Link to="/login">
                <button className="border">Login</button>
              </Link>
              <Link to="/tasks">
                <button className="border">Tasks</button>
              </Link>
              <Link to="/AdminPanel">
                <button className="border">AdminPanel</button>
              </Link>
              </div>
            </div>
          }
        />

        <Route
          path="/register"
          element={
            <div>
              <div className="flex flex-row gap-5 justify-center items-center">
              <Link to="/register">
                <button className="border bg-white rounded text-black p-1">Register</button>
              </Link>
              <Link to="/login">
                <button className="border  bg-white rounded text-black p-1">Login</button>
              </Link>
              <Link to="/tasks">
                <button className="border  bg-white rounded text-black p-1">Tasks</button>
              </Link>
              <Link to="/AdminPanel">
                <button className="border  bg-white rounded text-black p-1">AdminPanel</button>
              </Link>
              </div>

              <Register />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <>
            <div  className="flex flex-row gap-5 justify-center items-center">
              <Link to="/register">
                <button className="border  bg-white rounded text-black p-1">Register</button>
              </Link>
              <Link to="/login">
                <button className="border  bg-white rounded text-black p-1">Login</button>
              </Link>
              <Link to="/tasks">
                <button className="border  bg-white rounded text-black p-1">Tasks</button>
              </Link>
              <Link to="/AdminPanel">
                <button className="border  bg-white rounded text-black p-1">AdminPanel</button>
              </Link>
</div>
              <Login setLoggedIn={setLoggedIn} />
            </>
          }
        />

        <Route
          path="/tasks"
          // element={loggedIn ? <Tasks /> : <Navigate to="/login" />}
          element={
            <>
            <div  className="flex flex-row gap-5 justify-center items-center">
              <Link to="/register">
                <button className="border  bg-white rounded text-black p-1">Register</button>
              </Link>
              <Link to="/login">
                <button className="border  bg-white rounded text-black p-1">Login</button>
              </Link>
              <Link to="/tasks">
                <button className="border  bg-white rounded text-black p-1">Tasks</button>
              </Link>
              <Link to="/AdminPanel">
                <button className="border  bg-white rounded text-black p-1">AdminPanel</button>
              </Link>
              </div>

              <Tasks />
            </>
          }
        />
          <Route
          path="/AdminPanel"
          element={
            <>
              <div  className="flex flex-row gap-5 justify-center items-center">
              <Link to="/register">
                <button className="border  bg-white rounded text-black p-1">Register</button>
              </Link>
              <Link to="/login">
                <button className="border  bg-white rounded text-black p-1">Login</button>
              </Link>
              <Link to="/tasks">
                <button className="border  bg-white rounded text-black p-1">Tasks</button>
              </Link>
              <Link to="/AdminPanel">
                <button className="border  bg-white rounded text-black p-1">AdminPanel</button>
              </Link>
</div>
              <AdminPanel />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
