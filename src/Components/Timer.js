import React,{useEffect, useRef ,useState} from 'react';
import View from '../View';
function Timer({setShowScore , options})
{
 const[time,SetTime]=useState(10);
//  const foo = useRef();
//  useEffect(() => {
//   function tick() {
//       SetTime(prevSeconds => prevSeconds - 1)
//   }
//   foo.current = setInterval(() => tick(), 1000)
// }, [setShowScore,time]);
// useEffect(() => {
//   if (time  === 0) {
//     clearInterval(foo.current);
//     return setShowScore(true);
//   }
// }, [setShowScore,time])
function reset(){
  SetTime(5);
}

 useEffect(() => {
  let item;
  
   
   if(time === 0) 
   return setShowScore(true);


     item= setInterval(()=>{
     
      SetTime((seconds)=>seconds -1);
    },1000);
   
  
  },[setShowScore, time]);
 

//  useEffect(()=>{
//    SetTime(10);
//  },[options] )

  return time
}
export default Timer;