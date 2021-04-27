import BlackButton from "../Button/BlackButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const CommunityChat = () => {
  const [roomName, setRoomName] = useState();

const handleRoomChange = (e) => {
  setRoomName(e.target.value);
}
  return (
    <>
      <div className="col-lg-8">
        <div
          style={{
            backgroundColor: "lightgray",
            marginLeft: "100px",
            marginTop: "20px",
            height: "350px",
            alignContent: "center",
            mozBoxShadow: "inset 0 0 10px #000000",
            webkitBoxShadow: "inset 0 0 10px #000000",
            boxShadow: "inset 0 0 10px #000000",
          }}
        >
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ textAlign: "center", paddingTop: " 50px" }}>
                Community Chat Room
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
              }}
            >
              <label for="cars" style={{ padding: "10px", fontSize: "20px" }}>
                Choose a Room:
              </label>

              <select
                style={{
                  width: "150px",
                  padding: "15px",
                  border: "none",
                  height: "50px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
                }}
                className="roomInput"
                name="Rooms"
                value={roomName}
                onChange={handleRoomChange}
              >

                <option value="General Chat">General Chat</option>
                <option value="Health">Health</option>
                <option value="Socializing">Socializing</option>
                <option value="Diet">Diet</option>
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <Link to={`/chatroom/${roomName}`}>
              <BlackButton title="Join Room" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityChat;
