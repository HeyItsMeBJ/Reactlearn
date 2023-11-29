import React, { useContext } from 'react'
import { TestContext } from './Context'



function Display() {

const {temp,settemp}=useContext(TestContext)

  return (
    <div>Display : {temp} </div>
  )
}

export default Display