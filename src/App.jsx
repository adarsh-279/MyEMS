import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {




  const handleLogin = (email, password) => {
    if (email == "admin1@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({role: 'admin'}));
    } else if (authData && authData.employees.find((e)=> email == e.email && e.password == password)) {
      setUser("employee");
       localStorage.setItem("LoggedInUser", JSON.stringify({ role: "employee" }));
    } else {
      alert("Bhag yaha se");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
