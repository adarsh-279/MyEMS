import React from 'react'
import Header from '../pages/Header'
import TaskListPanel from '../pages/TaskListPanel';
import TaskList from '../tasklist/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className="p-10 w-full h-screen bg-zinc-900 text-white">
      <Header />
      <TaskListPanel />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard