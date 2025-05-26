import { useEffect, useState, } from "react";
import useConversationStore from "../zustand/useConversations";
import toast from "react-hot-toast";


const useGetMessages = () => {
 const [loading, setLoading] = useState(false); 
  const {messages ,setMessages, selectedConversation} = useConversationStore();


  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try { 
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/messages/${selectedConversation._id}`,{
          headers: {
    Authorization: `Bearer ${token}`,
  }
        })          

        const data = await response.json();
 
        setMessages(data);
      }
      catch (error) {
       toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id,setMessages]);

  return{ messages,loading}

}
export default useGetMessages;