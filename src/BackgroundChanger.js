import React, { useState } from "react";
import "./index.css";

function BackgroundChanger() {
  const [currentBack, setCurrentBack] = useState("black")
  const changeBackground = (str) => {
    setCurrentBack(str)
  }
  return (
    <>
      <div className=" w-full h-screen flex justify-center content-end flex-wrap"
        style={{ backgroundColor: currentBack }}>
        <div className="select-none text-white bg-white w-1/2 h-12 flex justify-around content-center flex-wrap border-4 rounded-3xl border-transparent mb-10 ">
          <button className="h-8 w-16 bg-red-950 border-4 rounded-2xl border-transparent hover:bg-red-700 active:bg-red-800"
            onClick={() => changeBackground('red')}>Red</button>
          <button className="h-8 w-16 bg-blue-950 border-4 rounded-2xl border-transparent hover:bg-blue-700 active:bg-blue-800"
          onClick={() => changeBackground('blue')}>Blue</button>
          <button className="h-8 w-16 bg-pink-950 border-4 rounded-2xl border-transparent hover:bg-pink-700 active:bg-pink-800"
          onClick={() => changeBackground('pink')}>Pink</button>
          <button className="h-8 w-16 bg-green-950 border-4 rounded-2xl border-transparent hover:bg-green-700 active:bg-green-800"
          onClick={() => changeBackground('green')}>Green</button>
          <button className="h-8 w-16 bg-slate-950 border-4 rounded-2xl border-transparent hover:bg-slate-700 active:bg-slate-800"
          onClick={() => changeBackground('grey')}>Slate</button>
        </div>
      </div>
    </>
  );
}

export default BackgroundChanger;
