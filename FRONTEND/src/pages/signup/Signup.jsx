import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (

    <div className='flex flex-col items-center justify-center min-w-96 mx-auto' >
      <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
      <h1  className='text-3xl font-semibold text-center text-gray-300'>
      Signup
      <span className='text-red-500'>ChatApp</span>
     </h1>

      <form action="">
       <div>
         <label className='label p-2'>
           <span className='text-base label-text'>FullName</span>
         </label>

         <input type="text" placeholder="enter fullname" className='input input-bordered w-full h-10' />
        </div>

         <div>
         <label className='label p-2'>
           <span className='text-base label-text'>Username</span>
         </label>

         <input type="text" placeholder="enter username" className='input input-bordered w-full h-10' />
        </div>

         <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Password</span>
        </label>

        <input type="password" placeholder="enter password" className='input input-bordered w-full h-10' />



      </div>



      
         <div>
        <label className='label p-2'>
          <span className='text-base label-text'> Confirm Password</span>
        </label>

        <input type="password" placeholder=" enter confirm password" className='input input-bordered w-full h-10' />



      </div>


        <br/>
          <GenderCheckBox/>
        

      <a href="#"  className='text-sm hover:underline text-green-400 hover:text-blue-600 mt-2 inline-block'>{"Already"} have an Account</a>

      <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
        </div>



        </form>
      </div>


    </div>
  )
}

export default Signup