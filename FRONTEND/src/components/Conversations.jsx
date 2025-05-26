import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../hooks/useGetConversations';
import { getRandomEmoji } from '../utils/emojis'; // Ensure named export or change accordingly

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()} // Call the function to pass actual emoji
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
