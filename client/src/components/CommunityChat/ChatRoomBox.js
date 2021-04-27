import useChat from "./UseChat";
import { useState } from "react";
import BlackButton from "../Button/BlackButton";
import { useParams } from "react-router";

const ChatRoomBox = (props) => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);

  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    alert("clicked");
    console.log("newMessage", newMessage);
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="col-lg-12">
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "lightgray",
          MozBoxShadow: "inset 0 0 10px #000000",
          webkitBoxShadow: "inset 0 0 10px #000000",
          boxShadow: "inset 0 0 10px #000000",
          marginBottom: "200px",
          margin: "auto",
        }}
      >
        <h4
          className="roomName"
          style={{ paddingLeft: "50px", paddingTop: "50px" }}
        >
          Welcome to the {roomId} chat room
        </h4>
        <h5 style={{ paddingLeft: "50px" }}>Please introduce yourself</h5>
        <form onSubmit={handleSendMessage}>
          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write your message here...."
            className="newMessageInputField"
            style={{ marginLeft: "50px", padding: "20px", width: "80%" }}
          />
          <div style={{ paddingLeft: "50px" }}>
            <BlackButton title="Send" />
          </div>
        </form>
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
      </div>
    </div>
  );
};

export default ChatRoomBox;
