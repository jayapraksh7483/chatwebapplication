import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='input input-borded rounded-full'/>
       <button className='btn btn-circle  bg-green-500 text-white'>
        <FaSearch />

       </button>
    </form>



  )
}

export default SearchInput