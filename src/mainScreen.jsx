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
        background: "radial-gradient(circle at top, #eef5ff, #dbe9ff)",
      }}
      className="flex flex-col items-center overflow-hidden"
    >
      <div className="w-full flex justify-between items-center px-10 py-6">
        <div className="flex items-center gap-3 text-blue-700 text-xl font-semibold">
          <div className="w-7 h-7 border-2 border-blue-600 rounded-md flex items-center justify-center">
            ✓
          </div>
          Task App
        </div>

        <div className="flex gap-4 md:flex-row ">


          <Link to="/register">
            <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              Login
            </button>
          </Link>
          <Link to="/">
            <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              Tasks
            </button>
          </Link>
          <Link to="/AdminPanel">
            <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50">
              AdminPanel
            </button>
          </Link>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-blue-700 mt-20 mb-10">
        Task App
      </h1>

      <div className="w-full max-w-4xl">
        <Routes>
         

          <Route
            path="/register"
            element={
              <div>
                {/* <div className="flex gap-5 justify-center items-center mb-10">
                  <Link to="/register">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                  <Link to="/tasks">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Tasks
                    </button>
                  </Link>
                  <Link to="/AdminPanel">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      AdminPanel
                    </button>
                  </Link>
                </div> */}

                <Register />
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {/* <div className="flex gap-5 justify-center items-center mb-10">
                  <Link to="/register">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                  <Link to="/tasks">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Tasks
                    </button>
                  </Link>
                  <Link to="/AdminPanel">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      AdminPanel
                    </button>
                  </Link>
                </div> */}

                <Login setLoggedIn={setLoggedIn} />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {/* <div className="flex gap-5 justify-center items-center mb-10">
                  <Link to="/register">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                  <Link to="/tasks">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Tasks
                    </button>
                  </Link>
                  <Link to="/AdminPanel">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      AdminPanel
                    </button>
                  </Link>
                </div> */}

                <Tasks />
              </>
            }
          />

          <Route
            path="/AdminPanel"
            element={
              <>
                {/* <div className="flex gap-5 justify-center items-center mb-10">
                  <Link to="/register">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                  <Link to="/tasks">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      Tasks
                    </button>
                  </Link>
                  <Link to="/AdminPanel">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                      AdminPanel
                    </button>
                  </Link>
                </div> */}

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
