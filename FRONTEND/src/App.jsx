 import React from 'react';
import './App.css'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Homepage from './pages/homepage/Homepage';
function App() {
  

  return (
     <> 
     <div className='p-4 h-screen flex items-center justify-center'>
       {/* <Login/> */}

       {/* <Signup/> */}
       <Homepage/>
     </div>
       
    </>
  )
}

export default App
