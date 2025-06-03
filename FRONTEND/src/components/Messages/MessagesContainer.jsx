// MessagesContainer.jsx
import React, { useEffect } from 'react';
import Messages from "./Messages"
import MessageInput from "./MessageInput"
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
    <div className="flex flex-col w-full sm:w-2/3 md:w-3/4 lg:w-4/5 min-h-[300px] sm:min-h-0">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-2 sm:px-4 py-2 mb-2">
            <span className="label-text text-sm sm:text-base">To:</span>
            <span className="text-blue-900 font-bold text-sm sm:text-base">
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
      <div className="px-4 text-center text-sm sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>👋 Welcome {authUser.fullname} 👋</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-2xl sm:text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};