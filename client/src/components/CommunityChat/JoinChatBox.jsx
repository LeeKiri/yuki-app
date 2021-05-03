import BlackButton from "../Button/BlackButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const defaultRoom = "general";

const CommunityChat = () => {
  const [roomName, setRoomName] = useState(defaultRoom);
  const history = useHistory();

  const handleRoomChange = (e) => {
    console.log(e.target.value)
    setRoomName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/chatroom/${roomName}`);
  };

  return (
    <>
      <div className="col-lg-8">
        <div
          className="chatBox"
          style={{
            backgroundColor: "lightgray",
            marginLeft: "100px",
            marginTop: "20px",
            height: "350px",
            alignContent: "center",
            MozBoxShadow: "inset 0 0 10px #000000",
            WebkitBoxShadow: "inset 0 0 10px #000000",
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
              className="col-lg-12 form-container"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <label htmlFor="cars" style={{ padding: "10px", fontSize: "20px" }}>
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
                  <option value="general">General</option>
                  <option value="health">Health</option>
                  <option value="socializing">Socializing</option>
                  <option value="diet">Diet</option>
                </select>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "20px",
                  }}
                >
                  <BlackButton title="Join Room" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityChat;
