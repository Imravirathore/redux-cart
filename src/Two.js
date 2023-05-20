import React from 'react'
//Redux
import { useSelector,useDispatch } from 'react-redux'
import {Inc,Dec} from './states/reducer/index'

function Two() {
  const curState = useSelector((state) => state.numberWala)

  // actions
  const dispatch = useDispatch();

  return (
<>
    <h1>Two</h1>
   <h2 style={{textAlign:'center'}}>Cart Items : {curState} </h2>

   
</>    
  )
}

export default Two