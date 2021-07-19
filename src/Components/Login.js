import React ,{useContext,useReducer,useState} from "react";
import {Link, Route,Router} from 'react-router-dom'; 
import OptionContext from "./OptionContext";
import  DataContext  from "./OptionContext";



function Login(){
    const opt=useContext(OptionContext);
    const [options] = useState(opt.options);
    //const data=useContext(DataContext);

    const [name,setName]=useState('');
    const[show,setShow]=useState(false);
    const[filtername,setFilterName]=useState("",[]);
     console.log(opt.user);
    console.log(name);
    // console.log(opt.options(id));
    
    
   
    const handleClick = (e) => {
        e.preventDefault();
         setName(e.target.value);
         setShow(false);
        
        }
        
        
    const filterHandle =(e)=>{
        setFilterName(e.target.value);
        console.log(filtername);
        }
    const filtered = options.filter((options) =>
    options.value.toLowerCase().includes(filtername.toLowerCase())
    );
    
    return(
        
        <div className="pt-20 pl-10 pr-10"> 
        <div className="border-2 border-gray-300 shadow-xl bg-gray-100">
         
             <h2 className="text-center text-2xl font-bold text-gray-600">
                Quiz
             </h2>
             <br/>
             <br/>
             <form >
                 <div className="flex justify-center">
                   <div className="w-60 ">
                       <label>Name</label>
                       <input type="text" Name="user"  onChange={(e) => opt.setUser(e.target.value)} className="bg-gray-200 border-2 border-gray-100 rounded-xl w-full
                       py-2 px-4 focus:outline-none focus:bg-white focus:border-green-500 " required/>
                        
                   </div>
                   </div>
                   <br/>
                   <div className="flex justify-center">
                   <div className="w-60 ">
                       <label>Select Your Quiz&nbsp;</label>
                       <br/>
                       <div className="flex flex-row  bg-gray-200 border-2 border-gray-100 rounded-xl w-full
                       py-2 px-4 focus-within:outline-none focus-within:bg-white  focus-within:border-green-500 ">
                       
                       {name}
                       <input type="text"  onChange={(e) => filterHandle(e)} className="bg-gray-200 w-20 focus:outline-none  focus:bg-white" />&nbsp;&nbsp;
                      
                       </div>
                       <div className=" absolute -mt-9 ml-52 ">
                       <i className="" onClick ={()=>setShow(!show)}  class="fa fa-angle-down"></i></div>
                       <div >
                       {show?
                        <div className="border-gray-300 border-2 rounded-xl">
                         {filtered.map((a) => (
                          <div className="p-2 hover:bg-gray-100 cursor-pointer">
                        <option className="" onClick={(e)=> {handleClick(e)}} key={a.id}>{a.value}</option>  </div> ))}
                         
                           </div>
                       :null }
                       </div>
                   </div>
                 </div>
                 <br/><br/>
                 <div className="flex justify-center">
                 <Link to={`/Quiz/${name}`}><button type="submit" className="lg:w-30 border-2 px-4 py-2 rounded-md border-green-500 hover:bg-gray-200 mb-10 ">
                         Login
                     </button></Link>
            
                 </div>
             </form>
         </div>
         </div>
         
    );
   
}
export default Login;