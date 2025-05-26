import React,{ useContext, useEffect } from "react";
 
import { createContext,useState } from "react";
import { useAuthContext } from "./AuthContext";
import  io from "socket.io-client"

 const SocketContext = createContext( );

export const useSocketContext =()=>{
    return useContext(SocketContext);
}





export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
      const {authUser} = useAuthContext();

   useEffect(() => {
  let newSocket;

  if (authUser) {
    newSocket = io("https://chatwebapplication-7.onrender.com", {
        credentials: true,
      query: {
        userId: authUser._id,
      },
        Credentials: true, // important for cookies/auth if you're using them
      transports: ["websocket", "polling"], // avoid transport fallback issues
    });

    setSocket(newSocket);

    newSocket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });
  }

  // Cleanup when authUser changes or component unmounts
  return () => {
    if (newSocket) {
      newSocket.disconnect(); // or newSocket.close();
    }
    setSocket(null); // reset socket in state
  };
}, [authUser]);

  return (
    <SocketContext.Provider value={{socket,onlineUsers}}>
      {children}
    </SocketContext.Provider>
  );
};