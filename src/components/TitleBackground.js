import React from 'react'

const TitleBackground = ({title,overview}) => {
  return (
    <div className="pt-[20%] pl-4 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl px-6">{title}</h1>
      <p className="pt-6 w-1/2 text-md px-7">{overview}</p>
      <div className="p-5 flex flex-wrap">
        <button className=" bg-white text-black ml-3 w-35 p-1 px-2 rounded-lg hover:bg-opacity-50 ">
          ▶ Play
        </button>
        <button className=" bg-gray-600 text-white bg-opacity-30 ml-3 w-35 p-1 px-2 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
}

export default TitleBackground;
