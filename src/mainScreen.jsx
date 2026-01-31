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
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #eef5ff, #c2d7fa)",
      }}
      className="flex flex-col items-center overflow-hidden"
    >
      <div className="w-full flex justify-between items-center px-10 py-6 mr-15 md:mr-auto">
        <div className="flex items-center gap-3 text-blue-700 text-xl font-semibold ">
          <div className="w-7 h-7 border-2 border-blue-600 rounded-md flex items-center justify-center">
            ✓
          </div>
          CRUD Task App
        </div>

        <div className="flex gap-4 md:flex-row ">


          <Link to="/register">
            <button className="border border-blue-600 hover:bg-blue-600 cursor-pointer hover:text-white text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 cursor-pointer hover:text-white px-4 py-1.5 rounded-lg hover:bg-blue-50">
              Login
            </button>
          </Link>
          <Link to="/">
            <button className="hover:bg-blue-600 cursor-pointer hover:text-white border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              Tasks
            </button>
          </Link>
          <Link to="/AdminPanel">
            <button className="border hover:bg-blue-600 cursor-pointer hover:text-white border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              AdminPanel
            </button>
          </Link>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-blue-700 mt-5 ">
        CRUD Task App
      </h1>

      <div className="w-full max-w-4xl">
        <Routes>
         

          <Route
            path="/register"
            element={
              <div>
            

                <Register />
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <>
          

                <Login setLoggedIn={setLoggedIn} />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
           

                <Tasks />
              </>
            }
          />

          <Route
            path="/AdminPanel"
            element={
              <>
         
                <AdminPanel />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
