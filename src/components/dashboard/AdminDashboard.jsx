import React from 'react'
import Header from '../pages/Header'
import CreateTask from '../pages/CreateTask';
import AllTask from '../pages/AllTask';

const AdminDashboard = () => {
  return (
    <div className="p-10 w-full h-screen bg-zinc-900 text-white">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard