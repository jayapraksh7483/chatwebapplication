import { useState } from "react";
import useConversationStore from "../zustand/useConversations";

import toast from "react-hot-toast";

const useSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const { messages , setMessages, selectedConversation } = useConversationStore();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
           
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    credentials: "include",
                    
                   
                },
                              credentials: 'include', 
                body: JSON.stringify({message}),
   
});

            const data = await response.json();
            setMessages([...messages,data]);
          
        } catch (error) {
           
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return {loading,sendMessage };

}

export default useSendMessage;