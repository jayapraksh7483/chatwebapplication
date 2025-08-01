import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversationStore from '../../zustand/useConversations';
import Messages from './Messages';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversationStore();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ?  authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor= fromMe ? "bg-blue-500": "";
    const shakeClass= message.shouldShake? "shake":"";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">

                <div className="w-10 rounded-full">


                    <img src={profilePic} />


                </div>
            </div>
            <div className={ `chat-bubble  text-blue ${bubbleBgColor}  ${shakeClass}`}>{message.message}</div>
             <div className="chat-footer opacity-50text-xs flex gap-1 items-center">{formattedTime}</div>


        </div>
    )
}

export default Message