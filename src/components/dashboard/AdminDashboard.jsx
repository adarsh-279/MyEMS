import React from 'react'
import Header from '../pages/Header'
import CreateTask from '../pages/CreateTask';

const AdminDashboard = () => {
  return (
    <div className="p-10 w-full h-screen bg-zinc-900 text-white">
      <Header />
      <CreateTask />
    </div>
  );
}

export default AdminDashboard