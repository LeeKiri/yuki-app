import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const newChatMessage = "newChatMessage";
const newUser = "newUser";
const SOCKET_SERVER_URL = "http://localhost:8080";

const useChat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([])

  const socketRef = useRef();

  useEffect(() => {

    // this creates the websocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    // set up to listen for incoming messages
    socketRef.current.on(newChatMessage, (data) => {
      console.log(data, "data")
      const incomingMessage = {
        ...data,
        ownedByCurrentUser: data.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    //setup to listen for new users
    socketRef.current.on(newUser, (user) => {
      const incomingUser = {
        ...user,
        nameofCurrentUser: user.senderId === socketRef.current.id,
      };
      setUsers((users) => [...users, incomingUser]);
    })

    //destroys connection when user disconnects
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  //send new user to server 
  const sendNewUser = (user) => {
    socketRef.current.emit(newUser, {
      body: user,
      senderId: socketRef.current.id,
    })
  }
  //send message to server which is then broadcast to chatroom
  const sendMessage = (messageBody, user) => {
    socketRef.current.emit(newChatMessage, {
      body: messageBody,
      senderId: socketRef.current.id,
      user: user,
    });
  };

  return { messages, sendMessage, users, sendNewUser };
};

export default useChat;
