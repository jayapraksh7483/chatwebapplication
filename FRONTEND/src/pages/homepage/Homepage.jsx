import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessagesContainer from '../../components/Messages/MessagesContainer'

const Homepage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

     <Sidebar/>
      <MessagesContainer/>  
    </div>
  )
}

export default Homepage