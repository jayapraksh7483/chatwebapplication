import { useEffect, useState } from "react";
import useConversationStore from "../zustand/useConversations";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversationStore();

 

    useEffect(() => {
    if (!authUser) return; // Only fetch if logged in

    // Extract token from authUser - adjust depending on your authUser shape
    const token = authUser.token || (authUser?.user?.token) || null;

    if (!token) {
      console.error("No token found in authUser");
      return;
    }

    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://chatwebapplication-7.onrender.com/api/messages/${selectedConversation._id}",
          {
            method: "GET",
             headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setMessages(data);
        }
      } catch (error) {
        if (isMounted) {
          toast.error(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }

    return () => {
      isMounted = false;
    };
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
