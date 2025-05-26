import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    if (!authUser) return; // Only fetch if logged in

    // Extract token from authUser - adjust depending on your authUser shape
    const token = authUser.token || (authUser?.user?.token) || null;

    if (!token) {
      console.error("No token found in authUser");
      return;
    }
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`, {
          method: "GET",
           headers: {
    "Authorization": `Bearer ${token}`,
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
