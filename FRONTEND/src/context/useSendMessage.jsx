import { useState } from "react";
import useConversationStore from "../zustand/useConversations";

import toast from "react-hot-toast";

const useSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const { messages , setMessages, selectedConversation } = useConversationStore();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    message,
                    conversationId: selectedConversation._id,
                }),
            });

            const data = await response.json();
            setMessages([...messages, data]);
            toast.success("Message sent successfully");
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return { loading, sendMessage };

}

export default useSendMessage;