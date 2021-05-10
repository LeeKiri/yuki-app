import BlackButtonClick from "../Button/BlackButtonClick";
import "../../pages/chatroom.css";
/* eslint-disable react-hooks/exhaustive-deps */
import useChat from "./UseChat";
import { useState, useEffect } from "react";
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

  useEffect(
    (roomId) => {
      if (userName) var newUser = { name: userName, roomId: roomId };
      sendNewUser(newUser);
    },
    [userName]
  );

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
      <div className="container" id="chatContainer">
        <div className="row">
          <div className="col-lg-9">
            <h4 className="roomName">
              Welcome to the {roomId} chat room {userName}
            </h4>
            <h5 id="chatHeading">Please introduce yourself</h5>
            <textarea
              value={newMessage}
              onChange={handleNewMessageChange}
              onKeyPress={handleKeyEnter}
              placeholder="Write your message here...."
              className="newMessageInputField"
            />
            <div id="chatbtnDiv">
              <BlackButtonClick title="Send" onClick={handleSendMessage} />
            </div>
            <div className="messagesContainer">
              <ol className="messagesList">
                {messages.map((data, i) =>
                  data.user === userName ? (
                    <li
                      id="chatMessage"
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
                      id="otherUsersMessage"
                      key={i}
                      className={`messageItem ${
                        data.ownedByOtherUser ? "myMessage" : "recievedMessage"
                      }`}
                    >
                      {data.user}: {data.body}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
          <div className="col-lg-3 leaveCol">
            <div
              className="leavebtnDiv"
            >
              <Link to="/dashboard">
                <BlackButtonClick title="Leave Chat" />
              </Link>
            </div>
            {usersList ? (
              <>
                <h6 className="membersHeading">Members Online</h6>
                <div className="usersDiv">
                  <ul className="list-unstyled usersInRoom">
                    {usersList.map((data, i) => (
                      <li key={i}>{data.name}</li>
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
