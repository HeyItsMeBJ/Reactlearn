import React, { useContext } from 'react'
import { TestContext } from './Context'



function ComFrame() {

 let {temp,settemp} = useContext(TestContext)

  return (
    <>
    <input 
    type="text" name="" id=""
    value={temp}
    onChange={(e)=>settemp(e.target.value)}
     />
    </>
  )
}

export default ComFrame