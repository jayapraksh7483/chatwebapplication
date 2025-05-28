 import React, { useRef, useEffect } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessages from '../../hooks/useListenMessages';
import useConversationStore from '../../zustand/useConversations';
const Messages = () => {

  const { messages } = useConversationStore(); // ✅ use Zustand's messages
  
  const { loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-y-auto'>
      {!loading &&  Array.isArray(messages) && messages.length > 0 &&
        messages.map((message, idx) => (
          <div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => (
        <MessageSkeleton key={idx} />
      ))}

      {!loading && messages.length === 0 && (
        <p className='text-center'>
          Send a message to start the conversation!
        </p>
      )}
    </div>
  );
};

export default Messages;
