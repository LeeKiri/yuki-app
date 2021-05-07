/* eslint-disable react-hooks/exhaustive-deps */
import useChat from "./UseChat";
import { useState, useEffect } from "react";
import BlackButtonClick from "../Button/BlackButtonClick";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ChatRoomBox = ({ userName }) => {
  const { roomId } = useParams();
  const { messages, sendMessage, users, sendNewUser } = useChat({ roomId });

  const [newMessage, setNewMessage] = useState("");
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  useEffect(() => {
    if (userName) sendNewUser(userName);
  }, [userName]);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("newMessage", newMessage);
    sendMessage(newMessage, userName);
    setNewMessage("");
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage(newMessage, userName);
      setNewMessage("");
    }
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
              onKeyPress={handleKeyEnter}
              placeholder="Write your message here...."
              className="newMessageInputField"
              style={{ marginLeft: "50px", padding: "20px", width: "75%" }}
            />
            <div style={{ paddingLeft: "50px", paddingBottom: "10px" }}>
              <BlackButtonClick title="Send" onClick={handleSendMessage} />
            </div>
            <div className="messagesContainer">
              <ol style={{ listStyleType: "none" }} className="messagesList">
                {messages.map((data, i) =>
                  data.user === userName ? (
                    <li
                      style={{
                        backgroundColor: "#1a75ff",
                        padding: "10px",
                        color: "white",
                        borderRadius: "10px",
                        margin: "8px",
                        fontSize: "15px",
                        font: "yserif",
                        marginRight: "20px",
                        width: "fit-content",
                        letterSpacing: ".1em",
                      }}
                      key={i}
                      className={`messageItem ${
                        data.ownedByCurrentUser
                          ? "myMessage"
                          : "recievedMessage"
                      }`}
                    >
                      {data.user}: {data.body}
                    </li>
                  ) : (
                    <li
                      style={{
                        backgroundColor: "#009973",
                        padding: "10px",
                        color: "white",
                        borderRadius: "10px",
                        margin: "8px",
                        fontSize: "15px",
                        font: "yserif",
                        marginRight: "20px",
                        width: "fit-content",
                        letterSpacing: ".1em",
                      }}
                      key={i}
                      className={`messageItem ${
                        data.ownedByCurrentUser
                          ? "myMessage"
                          : "recievedMessage"
                      }`}
                    >
                      {data.user}: {data.body}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="btnDiv" style={{ marginTop: "50px", marginRight: "80px" }}>
              <Link to="/dashboard">
                <BlackButtonClick title="Leave Chat" />
              </Link>
            </div>
            {usersList === null ? (
              <>
                <h6 style={{ marginTop: "20px" }}>Members</h6>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "fit-content",
                    margin: "50px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <ul className="list-unstyled">
                    {usersList.map((data, i) => (
                      <li style={{ textAlign: "left", padding: "5px" }} key={i}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomBox;
