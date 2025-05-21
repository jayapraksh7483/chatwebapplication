import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> 
      
     <h1  className='text-3xl font-semibold text-center text-gray-300'>
      Login
      <span className='text-red-500'>ChatApp</span>
     </h1>

     <form action="">
      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Username</span>
        </label>

        <input type="text" placeholder="Type here" className='input input-bordered w-full h-10' />  



      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Password</span>
        </label>

        <input type="password" placeholder="Type here" className='input input-bordered w-full h-10' />



      </div>

      <a href="#"  className='text-sm hover:underline text-green-400 hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an Account</a>

      <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
        </div>


     </form>



       
      </div>
      
      </div>
  )
}

export default Login