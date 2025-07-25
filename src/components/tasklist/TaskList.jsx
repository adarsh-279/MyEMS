import React from "react";

const TaskList = () => {
  return (
    <div className="tasklist w-full h-[55%] py-5 mt-10 flex justify-start items-center p-5 gap-5 overflow-hidden overflow-x-auto flex-nowrap bg-[#46454579]">
      <div className="flex-shrink-0 h-full w-70 p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="bg-[#00000060] px-3 py-1 rounded text-sm">
            25-07-2025
          </h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-black">Code kr.....</h2>
        <p className="mt-5 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt
          necessitatibus maxime et assumenda quisquam atque sapiente quia quos
          nesciunt?
        </p>
      </div>
    </div>
  );
};

export default TaskList;