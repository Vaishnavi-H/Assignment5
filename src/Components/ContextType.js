import React from 'react';
import OptionContext from "./OptionContext";
import { useState } from "react";



 const ContextType= (props)=>{
  const[user, setUser]=useState('');
  // const [currentQuestion,setCurrentQuestion]=useState(0);
  //   const[showScore,setShowScore]=useState(false);
    const[score,setScore]=useState(0);
  const options=[
    {  id:"1",
    value:"Aptitude",
    questions:[
      {
   
    questiontext:"Which one of the following is not a prime number?",
    answers:[
     { text:'31', isCorrect:true},
     { text:'61', isCorrect:false},
     { text:'71', isCorrect:false},
     { text:'91', isCorrect:false},
   ]},
   {
  
     questiontext:"(112x54)=?",
     answers:[
      { text:' 67000', isCorrect:true},
      { text:'70000', isCorrect:false},
      { text:'7578', isCorrect:false},
      { text:'12', isCorrect:false},
    ]},
    {
    
     questiontext:"what is 3/4",
     answers:[
      { text:'0.25', isCorrect:true},
      { text:'1', isCorrect:false},
      { text:'2', isCorrect:false},
      { text:'3', isCorrect:false},
    ]},
    {
    
     questiontext:"1397 x 1397 = ?",
     answers:[
      { text:'1951609', isCorrect:true},
      { text:'189797', isCorrect:false},
      { text:'26979', isCorrect:false},
      { text:'3688989', isCorrect:false},
    ]},
    {
  
     questiontext:" If 20% of a = b, then b% of 20 is the same as:",
     answers:[
      { text:' 4 of a', isCorrect:true},
      { text:'1 of a', isCorrect:false},
      { text:'2 of a', isCorrect:false},
      { text:'3 of a', isCorrect:false},
    ]},
   ]
 },
  
   
   { id:"2",
    value:"Verbal",
    questions:[
     {
 
   questiontext:" Brief",
   answers:[
    { text:'partial', isCorrect:true},
    { text:'short', isCorrect:false},
    { text:'limited', isCorrect:false},
    { text:'littele', isCorrect:false},
  ]},
  {

    questiontext:" She lived ____ the expectations.",
    answers:[
     { text:'up to', isCorrect:true},
     { text:'as per', isCorrect:false},
     { text:'on', isCorrect:false},
     { text:'at', isCorrect:false},
   ]},
   {
  
    questiontext:"ENORMOUS",
    answers:[
     { text:'tiny', isCorrect:true},
     { text:'soft', isCorrect:false},
     { text:'average', isCorrect:false},
     { text:'weak', isCorrect:false},
   ]},
   {
   
    questiontext:" ARTIFICIAL",
    answers:[
     { text:'natural', isCorrect:true},
     { text:'red', isCorrect:false},
     { text:'truthful', isCorrect:false},
     { text:'solid', isCorrect:false},
   ]},
   {
   
    questiontext:"MORTAL",
    answers:[
     { text:'immortal', isCorrect:true},
     { text:'divine', isCorrect:false},
     { text:'spiritual', isCorrect:false},
     { text:'eternel', isCorrect:false},
   ]},
 ]},
   { id:"3",
    value:"Numeric",
    questions:[
     {
     
   questiontext:"what is 1/4",
   answers:[
    { text:'0.25', isCorrect:true},
    { text:'1', isCorrect:false},
    { text:'2', isCorrect:false},
    { text:'3', isCorrect:false},
  ]},
  {
 
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
   {
  
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
   {
 
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
   {
   
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
 ]},
   { id:"4",
    value:"General",
    questions:[
     {
    
   questiontext:"what is 1/4",
   answers:[
    { text:'0.25', isCorrect:true},
    { text:'1', isCorrect:false},
    { text:'2', isCorrect:false},
    { text:'3', isCorrect:false},
  ]},
  {
   
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
   {
    
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
   {
   
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},
   {
   
    questiontext:"what is 1/4",
    answers:[
     { text:'0.25', isCorrect:true},
     { text:'1', isCorrect:false},
     { text:'2', isCorrect:false},
     { text:'3', isCorrect:false},
   ]},]},
 ]
 
    
 
 
  return(
    <OptionContext.Provider value={{user,setUser,options,score,setScore}}>
      {props.children}
    </OptionContext.Provider>
  )
}
export default ContextType;