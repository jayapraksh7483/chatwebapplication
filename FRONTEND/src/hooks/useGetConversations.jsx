import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
 
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch( "https://chatwebapplication-7.onrender.com/api/users", {
          method: "GET",
           headers: {
     
    "Content-Type": "application/json"
  },
          credentials: "include",
        });

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
  }, [authUser]);

  return { loading, conversations };
};

export default useGetConversations;
