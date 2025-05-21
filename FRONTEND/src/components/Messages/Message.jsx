import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className="chat-image avatar">

                <div className="w-10 rounded-full">


                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="user avatar" />


                </div>
            </div>
            <div className="chat-bubble  text-blue bg-blue-500 ">hi! what is aap?</div>
             <div className="chat-footer opacity-50text-xs flex gap-1 items-center">12:42</div>


        </div>
    )
}

export default Message