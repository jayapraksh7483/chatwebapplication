import React, { use } from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout  from '../hooks/UseLogout'
import { useAuthContext } from '../context/AuthContext'

const LogoutButton = () => {
  const {loading,logout}=useLogout();
  return (
    <div className='mt-auto'>
       {!loading ?(<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>):
       (<span className=' loadinng loading-spinner'></span>)}
    </div>
  )
}

export default LogoutButton