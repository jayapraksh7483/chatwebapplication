import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversationStore from '../zustand/useConversations'
import notificationSound from "../sound/notification.mp3"
const useListenMessages = () => {

    const{socket}=useSocketContext();
    const {messages ,setMessages}=useConversationStore();

  useEffect(() => {
  if (!socket) return;

  const handleNewMessage = (newMessage) => {
    newMessage.shouldShake = true;
    const sound = new Audio(notificationSound);
    sound.play();
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  socket.on("newMessage", handleNewMessage);

  return () => {
    socket.off("newMessage", handleNewMessage);
  };
}, [socket, setMessages]);
}

export default useListenMessages