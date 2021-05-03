import useChat from "./UseChat";
import { useState } from "react";
import BlackButtonClick from "../Button/BlackButtonClick";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ChatRoomBox = ({ userName }) => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);

  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("newMessage", newMessage);
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <>
      <div
        className="container"
        style={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "lightgray",
          MozBoxShadow: "inset 0 0 10px #000000",
          WebkitBoxShadow: "inset 0 0 10px #000000",
          boxShadow: "inset 0 0 10px #000000",
          marginBottom: "200px",
          margin: "auto",
          paddingBottom: "50px",
        }}
      >
        <div className="row">
          <div className="col-lg-9">
            <h4
              className="roomName"
              style={{ paddingLeft: "50px", paddingTop: "50px" }}
            >
              Welcome to the {roomId} chat room {userName}
            </h4>
            <h5 style={{ paddingLeft: "50px" }}>Please introduce yourself</h5>
            <textarea
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write your message here...."
              className="newMessageInputField"
              style={{ marginLeft: "50px", padding: "20px", width: "75%" }}
            />
            <div style={{ paddingLeft: "50px" }}>
              <BlackButtonClick title="Send" onClick={handleSendMessage} />
            </div>
            <div className="messagesContainer">
              <ol style={{ listStyleType: "none" }} className="messagesList">
                {messages.map((message, i) => (
                  <li
                    style={{
                      backgroundColor: "#1E90FF",
                      padding: "15px",
                      color: "white",
                      borderRadius: "10px",
                      margin: "10px",
                      fontSize: "20px",
                      font: "yserif",
                      marginRight: "20px",
                    }}
                    key={i}
                    className={`messageItem ${
                      message.ownedByCurrentUser
                        ? "myMessage"
                        : "recievedMessage"
                    }`}
                  >
                    {userName}: {message.body}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="col-lg-3">
              <h6 style={{ margin: "50px"}}>Members</h6>
            <div style={{ backgroundColor: "white", height: "fit-content", margin: "50px", borderRadius: "5px"}}>
            </div>
            <Link to="/dashboard">
                    <BlackButtonClick title="Leave" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomBox;
