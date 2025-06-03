// src/components/Messages/MessagesContainer.jsx
import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversationStore from '../../zustand/useConversations';
import { useAuthContext } from '../../context/AuthContext';

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversationStore();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] min-w-[200px] overflow-y-auto">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-2 sm:px-4 py-1 sm:py-2 mb-1 sm:mb-2">
            <span className="label-text text-xs sm:text-sm">To:</span>
            <span className="text-blue-900 font-bold text-xs sm:text-sm">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-2 sm:px-4 text-center text-xs sm:text-sm md:text-lg text-gray-200 font-semibold flex flex-col items-center gap-1 sm:gap-2">
        <p>👋 Welcome {authUser.fullname} 👋</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-xl sm:text-2xl md:text-4xl text-center" />
      </div>
    </div>
  );
};