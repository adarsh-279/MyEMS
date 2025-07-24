import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
}

  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-900 text-white">
      <div className="border-2 border-[#ffffff50] px-4 py-3 rounded-lg h-70 w-70 flex items-center justify-center flex-col">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-5 items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none border-2 border-[#ffffff50] hover:border-blue-300 rounded-xl px-4 py-2 text-center"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none border-2 border-[#ffffff50] hover:border-blue-300 rounded-xl px-4 py-2 text-center"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-amber-200 px-4 py-3 text-black rounded-xl w-40 mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login