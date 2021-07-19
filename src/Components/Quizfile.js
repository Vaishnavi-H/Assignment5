import { PreviousMap } from "postcss";
import React ,{useContext,useImperativeHandle,useState,useEffect} from "react";
import OptionContext from "./OptionContext";

import View from "../View";

function Quizfile(items){
   
    const [update,setUpdate]=useState(0);
    const[view,setView]=useState(false);
    const{score,setScore}=useContext(OptionContext);


    const[time,SetTime]=useState(7);

    function timer(){
      SetTime(7);
    }

    if(time === 0){
     items.view(true);
     
    }    

    useEffect(() => {
      let item;
      
       
       if(time > 0) {

        item= setInterval(()=>{
          SetTime(time=>time -1);
        },1000);
       }
      return () => clearInterval(item);
      
      },[setView, time]);

    const Answer=(isCorrect)=>{
        if(isCorrect){
          setScore(score+1);
          timer();
         
        const next = update +1;
        if(next<items.options.questions.length){
          setUpdate(next);
          console.log(items.options.questions[update]);
        }else{
          items.view(true);
         
        }
    }
    else{
        items.view(true);
       
        
       
    }
      };

     
  
      
    return(
   <div   className="mt-1">
   
   {/* <Timer  options ={items.options.questions[update]} setShowScore={setShowScore}/>  */}
   
     <div className=" p-5 ">
     <div className="text-xl text-blue-500 text-center ">Time Left:{time}
       {/* <Timer options={options.questions[update]} setShowScore={setShowScore}/>*/} </div> 
         {items.options.questions[update].length}
        <div className=" mt-5 border-2 text-xl rounded-xl p-2 border-blue-200" key={items.options.questions.questionid}>
         {items.options.questions[update].questiontext}
         </div>
         <div className="flex mt-8 flex-row flex-wrap justify-around">
      {items.options.questions[update].answers.map((answers)=>(
       <div className="border-2 p-3 rounded-xl m-1 border-blue-200 w-32 hover:bg-gray-100"  >
       <button onClick={()=>Answer(answers.isCorrect)} > {answers.text} </button> </div>
      ))}</div></div></div>
    )
}
export default Quizfile;