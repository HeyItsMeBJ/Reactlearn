import React, { useState } from "react";
import { TestContext } from "./Context";
import ComFrame from "./ComFrame";
import Display from "./Display";


const Capp = () => {
  const [temp, settemp] = useState("sd");
      return (
      <TestContext.Provider value={{ temp, settemp }}>
    <div className=" w-screen h-96 bg-gray-400 flex justify-around flex-wrap content-center">
        <ComFrame />
        <Display />
    </div>
    </TestContext.Provider>

  )
}

export default Capp;
