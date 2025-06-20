 import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import UseLogin from '../../hooks/UseLogin.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';
 
const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const { login,loading } = UseLogin(); 

const handleSubmit = async (e) => {
  e.preventDefault(); 
   await login(username, password)
}



  return (
   <div className="flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen">
  <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 backdrop-blur-lg">
      
     <h1  className='text-3xl font-semibold text-center text-gray-300'>
      Login
      <span className='text-red-500'>ChatApp</span>
     </h1>

     <form onSubmit={handleSubmit} action="">
      <div>
        <label className='label p-2'>
          <span className='text-base label-text text-white'>Username</span>
        </label>

        <input type="text" placeholder="enter the username" className='input input-bordered w-full h-10' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />  



      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text text-white'>Password</span>
        </label>

        <input type="password" placeholder="enter the password" className='input input-bordered w-full h-10'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />



      </div>

       <Link
  to="/signup"
  className="text-sm hover:underline text-green-400 hover:text-blue-600 mt-2 inline-block"
>
  Don't have an account? Sign Up
</Link>

      <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700'
        disabled={loading}> {loading?<span className='loading loading-spinner'></span>:"Login"}</button>
        </div>


     </form>



       
      </div>
      
      </div>
  )
}

export default Login