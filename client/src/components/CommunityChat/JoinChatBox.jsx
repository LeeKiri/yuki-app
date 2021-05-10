import BlackButton from "../Button/BlackButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import "../../pages/community.css";

const defaultRoom = "general";

const CommunityChat = () => {
  const [roomName, setRoomName] = useState(defaultRoom);
  const history = useHistory();

  const handleRoomChange = (e) => {
    console.log(e.target.value);
    setRoomName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/chatroom/${roomName}`);
  };

  return (
    <>
      <div className="col-sm-12 col-lg-8 d-flex justify-content-center">
        <div className="chatBox">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="boxTitle">Community Chat Room</h2>
            </div>
          </div>
          <div className="row">
            <div id="boxDiv" className="col-lg-12 form-container">
              <form onSubmit={handleSubmit}>
                <label id="boxLabel" htmlFor="cars">
                  Choose a Room:
                </label>
                <select
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
                <div id="btnDiv">
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
