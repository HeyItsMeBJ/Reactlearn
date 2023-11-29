import React from "react";
// import image from './image.jpeg'




function TemChild1() {



  return (
    <div className="w-full h-3/4 flex flex-wrap justify-center content-center relative">
      <div className="w-full h-full bg-pink-300">
        <img
          src={require("./image.jpeg")}
          alt="LOL"
          className="h-full w-full"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-white dark:from-black flex flex-col flex-wrap justify-around content-start">
        <div className="pl-7 dark:text-white text-lg font-bold font-mono">Menu</div>
        <div className="pl-7 dark:text-white text-lg font-bold font-mono">Menu</div>
        <div className="pl-7 dark:text-white text-lg font-bold font-mono">Menu</div>
        <div className="pl-7 dark:text-white text-lg font-bold font-mono">Menu</div>
      </div>
      
    </div>
  );
}

export default TemChild1;
