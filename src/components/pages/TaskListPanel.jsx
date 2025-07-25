import React from 'react'

const TaskListPanel = () => {
  return (
    <div className='max-w-screen flex justify-between gap-5 mt-10'>
      <div className='p-10 w-[35%] bg-blue-400 rounded-xl'>
        <h1 className='text-xl font-semibold'>0</h1>
        <h1 className='text-lg font-medium'>New Task</h1>
      </div>
      <div className='p-10 w-[35%] bg-red-400 rounded-xl'>
        <h1 className='text-xl font-semibold'>0</h1>
        <h1 className='text-lg font-medium'>New Task</h1>
      </div>
      <div className='p-10 w-[35%] bg-green-400 rounded-xl'>
        <h1 className='text-xl font-semibold'>0</h1>
        <h1 className='text-lg font-medium'>New Task</h1>
      </div>
      <div className='p-10 w-[35%] bg-yellow-400 rounded-xl'>
        <h1 className='text-xl font-semibold'>0</h1>
        <h1 className='text-lg font-medium'>New Task</h1>
      </div>
    </div>
  )
}

export default TaskListPanel