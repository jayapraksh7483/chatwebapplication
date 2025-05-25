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
         const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
        if(authUser){
            const socket = io(BACKEND_URL,{
               query:{
                    userId: authUser._id
                }   


            });

 
            setSocket(socket);


            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
        
            return ()=>setSocket.close();
          
        }
        else{

              if(socket){
                socket.close();
                setSocket(null);
              }

        }
    },[authUser]);
  return (
    <SocketContext.Provider value={{socket,onlineUsers}}>
      {children}
    </SocketContext.Provider>
  );
};