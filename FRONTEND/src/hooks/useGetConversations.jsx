import React from "react";
import  { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (!authUser?.token) return; // ⛔ Don't fetch if token is not ready

    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://chatwebapplication-7.onrender.com/api/users", {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${authUser.token}`,
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || `HTTP error! Status: ${response.status}`);
        }

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
