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
        const API_BASE_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_BASE_URL}/api/messages/${selectedConversation._id}`)          

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