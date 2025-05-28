import React from "react";
import  { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversationStore from '../../zustand/useConversations'
import { useAuthContext } from '../../context/AuthContext'

const MessagesContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversationStore();
    
 

        useEffect(() => {

        return () => {
            setSelectedConversation(null);
        };

    }, [setSelectedConversation]);




    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation? (
                <NoChatSelected />  // ✅ Now this refers to the component
            ) : (
                <>
                    <div className="bg-late-500 px-4 py-2 mb-2">
                        <span className='label-text'>To:</span>
                        <span className='text-blue-900 font-bold'>{selectedConversation.fullname}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
}

export default MessagesContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>👋 Welcome 👋{authUser.fullname} 👋</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
};
