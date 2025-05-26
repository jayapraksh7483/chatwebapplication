import React, { useState, useEffect } from 'react';  // removed unused 'use'
import { useAuthContext } from '../context/AuthContext';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    const getConversations = async () => {
      

      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`
        ,{
          headers: {
    Authorization: `Bearer ${token}`,
  }
        }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, [authUser]);  // added authUser as dependency to reload when user changes

  return { loading, conversations };
};

export default useGetConversations;
