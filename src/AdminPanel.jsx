

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
  
  return <h2 className="text-3xl mt-10">{data}</h2>;
};

export default Admin