import React from 'react'

const Header = () => {
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-3xl">
        Hello <br /> <span className='text-6xl'>User 👋</span>
      </h1>
      <button className="px-4 py-3 w-25 text-sm bg-red-400 rounded-xl text-black">
        Log Out
      </button>
    </div>
  );
}

export default Header