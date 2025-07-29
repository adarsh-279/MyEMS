import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {

useEffect(() => {
  setLocalStorage()
  getLocalStorage()
},)

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == "admin1@example.com" && password == '123') {
setUser('admin')
    } else if (email == "user1@example.com" && password == "123") {
setUser("employee");
    } else {
      alert("Bhag yaha se");
    }  
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
