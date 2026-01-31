

import React from "react";

import axiosInstance from "./AxiosInstance";
import { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState("");
 
  useEffect(() => {
    axiosInstance
      .get("/admin/dashboard")
      .then((res) => setData(res.data.secretData))
      .catch(() => alert("Access denied"));
  }, []);
  // catch
  return (
    <div>
    <p className="text-green-500">Admin can only access the data</p>
  <h2 className="text-3xl mt-10 text-orange-600 font-bold">{data}</h2>
  </div>
  ) 
};

export default Admin