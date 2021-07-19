
import React from 'react';
function View({ score}){
  
    return(
      <div>
      {/* <h3 className= "text-xl text-center mt-20 ">Result of Your {id} quiz :</h3> */}
      <div className="text-xl text-center mt-10">you Scored {score} out Of  
      </div>
       
        </div>
    )
}
export default View;
// {options.questions.length}