import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex items-center justify-center -mt-5">
      <div className="bg-[#00000030] px-4 py-3 rounded-lg min-h-90 w-[90%] mt-10 flex items-center justify-center flex-col">
        <form className="flex gap-40 items-start justify-between">
          <div>
            <div className="pb-2">
              <h3 className="pb-2">Task Title</h3>
              <input
                type="text"
                placeholder="Type here"
                className="w-100 outline-none border-2 border-[#ffffff50] rounded-lg p-1"
              />
            </div>
            <div className="pb-2">
              <h3 className="pb-2">Date</h3>
              <input
                type="date"
                placeholder="Type here"
                className="w-100 outline-none border-2 border-[#ffffff50] rounded-lg p-1"
              />
            </div>
            <div className="pb-2">
              <h3 className="pb-2">Assign To</h3>
              <input
                type="text"
                placeholder="Type here"
                className="w-100 outline-none border-2 border-[#ffffff50] rounded-lg p-1"
              />
            </div>
            <div className="pb-2">
              <h3 className="pb-2">Category</h3>
              <input
                type="text"
                placeholder="web,design...."
                className="w-100 outline-none border-2 border-[#ffffff50] rounded-lg p-1"
              />
            </div>
          </div>
          <div>
            <div>
              <h3 className="pb-2">Description</h3>
              <textarea
                type="text"
                placeholder="Type here"
                rows="10"
                cols="70"
                className="resize-none outline-none border-2 border-[#ffffff50] rounded-lg p-2"
              />
            </div>
            <button className="bg-emerald-400 px-4 py-3 text-black rounded-xl w-64 mt-2 font-bold">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask