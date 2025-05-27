import { useEffect, useState } from "react";
import useConversationStore from "../zustand/useConversations";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversationStore();

 

    useEffect(() => {
    
  
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://chatwebapplication-7.onrender.com/api/messages/${selectedConversation._id}",
          {
            method: "GET",
            credentials: "include",
          
          }
        );


        const data = await response.json();
        if (data.error) throw new Error(data.error);
				setMessages(data);

       
      } catch (error) {
   
 
      } finally {
 
          setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
 
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
