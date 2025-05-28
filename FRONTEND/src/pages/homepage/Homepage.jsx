import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessagesContainer from '../../components/Messages/MessagesContainer'

const Homepage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-green border border-blue-400 rounded-lg shadow-lg bg-gray-900'>

     <Sidebar/>
      <MessagesContainer/>  
    </div>
  )
}

export default Homepage