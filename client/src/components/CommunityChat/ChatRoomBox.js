import useChat from "./UseChat";
import { useState } from "react";
import WhiteButton from "../Button/WhiteButton";

const ChatRoomBox = (props) => {
    const { roomId } = props.match.params;
     const { messages, sendMessage } = useChat(roomId);
     const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    }

     const handleSendMessage = () => {
         sendMessage(newMessage);
         setNewMessage("");
     }

  return (
    <div className="col-lg-12">
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "lightgray",
          mozBoxShadow: "inset 0 0 10px #000000",
          webkitBoxShadow: "inset 0 0 10px #000000",
          boxShadow: "inset 0 0 10px #000000",
          marginBottom: "200px",
          margin: "auto",
        }}
      >
          <h4 className="roomName">Room: {roomId}</h4>
          <div className="messagesContainer">
              <ol className="messagesList">
                  {messages.map((message, i) => (
                      <li
                      key={i}
                      className={`messageItem ${
                          message.ownedByCurrentUser ? "myMessage" : "recievedMessage"
                      }`}
                      >
                          {message.body}
                      </li>
                  ))}
              </ol>
          </div>
        <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write your message here...."
        className="newMessageInputField"
        />
        <WhiteButton title="Send" onClick={handleSendMessage}/>
      </div>
    </div>
  );
};

export default ChatRoomBox;
