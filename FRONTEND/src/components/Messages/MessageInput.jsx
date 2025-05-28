 import React,  {useState} from 'react'
 import { BsSend} from 'react-icons/bs'
 import useSendMessage from '../../hooks/useSendMessage.jsx';
 
const MessageInput = () => {

  const [message, setMessage] = useState("");
  const{loading,sendMessage} = useSendMessage();
   
     const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
 
     };
  return (
     <form action="" className='px-4 my-3' onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" placeholder="Send a Message" className="rounded-lg block border text-sm p-2.5 w-full bg-gray-700 border-white-600 text-white" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
 
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
           {loading ? <div className="loading loading-spinner "> </div>  : <BsSend/>}
        </button>
        </div>
         
     </form>
  )
}

export default MessageInput