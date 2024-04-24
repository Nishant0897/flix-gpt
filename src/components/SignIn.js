import React, { useState } from 'react'

const SignIn = () => {
  const [toggleSign, setToggleSign] = useState(true);
  const handleSign = () => {
    setToggleSign(!toggleSign);
  }
  return (
    <>
      <div className="m-auto pt-32 flex flex-wrap justify-center ">
        <button className="text-gray-800 p-2 text-2xl bg-slate-300 rounded-xl" onClick={handleSign}>
          {toggleSign ? "Sign In" : "Sign Up"}</button>
      </div>
      {toggleSign ? (
        <form className="p-5">
          <input
            type="email"
            placeholder="Enter your email-Id"
            className="w-4/12 h-8 text-base text-center rounded-lg p-1"
          ></input>
          <br />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-4/12 h-8 text-base text-center rounded-lg "
          ></input>
          <br />
          <button className="bg-cyan-300 rounded-lg text-base w-2/12">
            Login
          </button>
        </form>
      ) : (
        <form className="p-5">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-4/12 h-8 text-base text-center rounded-lg"
          ></input>
          <br />

          <input
            type="date"
            placeholder="Enter your Date Of Birth"
            className="w-4/12 h-8 text-base text-center rounded-lg"
          ></input>
          <br />
          <input
            type="email"
            placeholder="Enter your email-Id"
            className="w-4/12 h-8 text-base text-center rounded-lg"
          ></input>
          <br />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-4/12 h-8 text-base text-center rounded-lg"
          ></input><br/>
          <button className="bg-cyan-300 rounded-lg text-base w-2/12 ">
            Register
          </button>
        </form>
      )}
    </>
  );
}

export default SignIn;
