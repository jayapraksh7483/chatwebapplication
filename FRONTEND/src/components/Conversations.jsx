// src/components/Conversations.jsx
import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../hooks/useGetConversations';
import { getRandomEmoji } from '../utils/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-1 sm:py-2 flex flex-col overflow-y-auto space-y-1 sm:space-y-2">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
          className="py-1 px-2 sm:py-2 sm:px-3 hover:bg-gray-700 rounded-lg transition-colors text-xs sm:text-sm"
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};

export default Conversations;