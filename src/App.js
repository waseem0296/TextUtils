import React, { useState } from 'react'



import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
 import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

function App() {
  const [mode1,setmode1]=useState('primary');
  const[alert,setalert]=useState(null);
  const[mode,setmode]=useState('light');
  const[btntxt,setbtnText]=useState('Enable to dark mode');
  const[btntxt1,setbtnText1]=useState('Enable to Primary mode');
  const showalert=(message,type)=>
  {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode1=()=>
  {
    if(mode1==='success')
    {
    
      setmode1('primary')
      setbtnText1('Enable to success mode')
      document.body.style.backgroundColor='lightblue';
      showalert('Success mode is enabled','success');
      document.title='TextUtils-Primary mode';
    }
    else
    {
      setmode1('success');
      setbtnText1('Enable to primary mode')
      document.body.style.backgroundColor='lightgreen';
      showalert('Primary mode is enabled','success');
      document.title='TextUtils-Success mode';
    }
  }
  const togglemode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');

      setbtnText('Enable to light mode');
      document.body.style.backgroundColor='grey';
      showalert('Enable to light mode','success');
      document.title='TextUtils-dark mode';
    }

    else
    {
      setmode('light');
      setbtnText('Enable to dark mode');
      document.body.style.backgroundColor='white';
      showalert('Enable to dark mode','success');
      document.title='TextUtils-light mode';
      
    }
  }
  return (
  <>
  <Navbar title="TextUtils" home="Home" about="About" mode={mode} mode1={mode1}togglemode={togglemode}togglemode1={togglemode1} btntxt={btntxt} btntxt1={btntxt1}/>
  <Alert alert={alert}/>
   <TextForm heading="Try TextUtils-Word counter,Character counter,Count Lines" mode={mode} showalert={showalert}/> 
   <About heading="About us" mode={mode}/> 
  
  </>
  );
}

export default App;
