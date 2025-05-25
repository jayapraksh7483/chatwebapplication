import React ,{use, useState,useEffect}from 'react'

const useGetConversations = () => {
   const[loading, setLoading] = useState(false);
   const [conversations, setConversations] = useState([]);

   useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`)
          
        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();  } ,[]);
   return { loading, conversations };        

}

export default useGetConversations