import React from 'react'
import Button from 'react-bootstrap/Button';

//Redux
import { useSelector,useDispatch } from 'react-redux'
import {Inc,Dec} from './states/reducer/index'

function One() {
  const curState = useSelector((state) => state.numberWala)

  // actions
  const dispatch = useDispatch();

  return (
   <>
   <h1>Home Page</h1>

   <div style={{width:'50%', height:'200px', backgroundColor:'#D2E9E9', margin:'0 auto'}}>
   <h2 style={{textAlign:'center'}}>Cart Items : {curState} </h2>
  
   <Button onClick={()=>dispatch(Inc())} variant="primary">Add</Button>
   <Button  onClick={()=>dispatch(Dec())} variant="danger">Remove</Button>
   
   </div>
    
   </>
  )
}

export default One