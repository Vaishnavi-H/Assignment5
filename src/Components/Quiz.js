import React ,{useContext,useImperativeHandle,useState} from "react";
import OptionContext from "./OptionContext";
import {useParams} from "react-router-dom"; 
import Quizfile from "./Quizfile";
import Timer from "./Timer";
import View from "../View";




function Quiz(){
    const opt=useContext(OptionContext);
    const [option]=useState(opt.options);
    

    
    const[view,setView]=useState(false);
    const{score,setScore}=useContext(OptionContext);


    

    
    

    const {id}= useParams();
    console.log(id);
    const filterData=option.filter((options)=>{
       
        if(options.value === id){
         
        return options;
        
        }
       
        })
        .map((options)=>(
         
<div>

         {/* <div className=" border-2 p-5 mt-10">
        <div className="border-2">
          {options.question}
         </div>
           <div className="flex flex-col">{options.answers.map((answeroption)=>( 
       <div className="border-2 p-3"><button>{answeroption.text}</button></div>
      
      ))}
       </div>
       </div> */}
      
      {view? 
      <div>
       
       <p className="border-2 p-5 text-center border-red-100 bg-red-100 text-xl">Thank You <span className="text-red-500">{opt.user}</span></p>
      <div className="border-2 mt-20 border-gray-300 shadow-2xl bg-gray-100"> 
      <h3 className= "text-xl text-center mt-5">Result of Your {id} quiz :</h3>
      <div className="text-xl text-center mt-10 mb-10">You Scored {score} Out Of {options.questions.length} 
      </div>
      </div>
      </div>:
      <div>
         <p className="border-2 p-5 text-center border-red-100 bg-red-100 text-xl">Welcome!! <span className="text-red-500">{opt.user}</span></p>
         <div className="border-2 border-gray-200 bg-gray-200 p-3 text-center text-xl">{id}</div>
        {/* <div className="text-xl text-blue-500 text-center mt-5">Time Left:
       <Timer options={options.questions[update]} setShowScore={setShowScore}/> </div>  */}
       <Quizfile options={options} view={setView}/></div>}
      </div>
      ))


    //  .map((products)=>(
     
    //    <div> 
    //         {products.questions.questiontext}
    //   <div>{products.questions[update].answers.map((answeroption)=>(
    //    <button onClick={()=>handleAnswer(answeroption.isCorrect)}>{answeroption.text}</button>
      
    //   ))}</div>
    //   </div> 
    //     ))
      
    

return(
<div>

{filterData}

</div>

);
}
export default Quiz;
// {products.questions[update].map((quesoption)=>(
//   <div>{quesoption.text}</div>
 
//  ))}

