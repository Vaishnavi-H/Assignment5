import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OptionContext from './Components/OptionContext';
import ContextType from "./Components/ContextType";


ReactDOM.render(
  <React.StrictMode>
    
    <ContextType>
   
    <App />
    </ContextType>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
