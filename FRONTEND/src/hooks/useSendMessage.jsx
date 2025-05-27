import { useState } from "react";
import useConversationStore from "../zustand/useConversations";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversationStore();

  
    useEffect(() => {
  if (!authUser) return; // Only fetch if logged in

  // Extract token safely from authUser
  const token = authUser.token || (authUser?.user?.token) || null;

  if (!token) {
    console.error("No token found in authUser");
    return;
  }})

  const sendMessage = async (message) => {
    if (!selectedConversation?._id) {
      toast.error("No conversation selected");
      return;
    }
    
    setLoading(true);
 

    
    try {
      const response = await fetch("https://chatwebapplication-7.onrender.com/api/messages/send/${selectedConversation._id}",
        {
          method: "POST",
          headers: {
             "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ message }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to send message. Status: ${response.status}`);
      }

      const data = await response.json();
      // Use functional update to avoid stale messages
      setMessages(prevMessages => [...prevMessages, data]);
    } catch (error) {
      toast.error(error.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
