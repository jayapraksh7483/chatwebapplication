import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Homepage from './pages/homepage/Homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const { authUser } = useAuthContext(); // 🔁 Check your context export spelling

  console.log("AuthUser in App.jsx:", authUser);

  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center">
      <Routes>
        <Route path="/"element={authUser ? <Homepage /> : <Navigate to={"/login"} />}/>
        <Route path="/login"element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path="/signup"element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
