import React from 'react'
import Header from '../pages/Header'

const AdminDashboard = () => {
  return (
    <div className="p-10 w-full h-screen bg-zinc-900 text-white">
      <Header />
      <div className="flex items-center justify-center">
        <div className="bg-[#00000030] px-4 py-3 rounded-lg min-h-80 w-160 flex items-center justify-center flex-col">
          <form className="flex gap-5 items-center justify-between">
            <div>
              <div>
                <h3>Task Title</h3>
                <input type="text" placeholder="Type here" className='outline-none border-2 border-[#ffffff50] rounded-lg p-1'/>
              </div>
              <div>
                <h3>Date</h3>
                <input type="date" placeholder="Type here" className='outline-none border-2 border-[#ffffff50] rounded-lg p-1'/>
              </div>
              <div>
                <h3>Assign To</h3>
                <input type="text" placeholder="Type here" className='outline-none border-2 border-[#ffffff50] rounded-lg p-1'/>
              </div>
              <div>
                <h3>Category</h3>
                <input type="text" placeholder="web,design...." className='outline-none border-2 border-[#ffffff50] rounded-lg p-1'/>
              </div>
            </div>
            <div>
              <div>
                <h3>Description</h3>
                <textarea
                  type="text"
                  placeholder="Type here"
                  rows="10"
                  cols="30"
                  className="resize-none outline-none border-2 border-[#ffffff50] rounded-lg p-2"
                />
              </div>
              <button className="bg-amber-200 px-4 py-3 text-black rounded-xl w-40 mt-5">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard