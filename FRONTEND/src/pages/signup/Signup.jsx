 import React, { useState ,useEffect} from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import UseSignup from '../../hooks/UseSignup';
 
import { useAuthContext } from '../../context/AuthContext';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const {loading,signup}  = UseSignup();
  const { authUser } = useAuthContext();
 


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleGenderChange = (e) => {
    setInputs((prev) => ({ ...prev, gender: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto' >
      <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup
          <span className='text-red-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>FullName</span>
            </label>

            <input
              type="text"
              name="fullname"
              placeholder="enter fullname"
              className="input input-bordered w-full h-10"
              value={inputs.fullname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>

            <input
              type="text"
              name="username"
              placeholder="enter username"
              className="input input-bordered w-full h-10"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>

            <input
              type="password"
              name="password"
              placeholder="enter password"
              className="input input-bordered w-full h-10"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="enter confirm password"
              className="input input-bordered w-full h-10"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <br />

          {/* Pass the gender change handler and current gender value */}
          <GenderCheckBox onCheckboxChange={handleGenderChange} selectedGender={inputs.gender} />

          <Link to={"/login"} className='text-sm hover:underline text-green-400 hover:text-blue-600 mt-2 inline-block'>
            Already have an Account
          </Link>

          <div>
           <button disabled={loading} className='btn btn-block btn-sm mt-2 border border-slate-700'>
  {loading ? <span className="loading loading-spinner"></span> : "Signup"}
</button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
