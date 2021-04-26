import WhiteButton from "../Button/WhiteButton";
import { Link } from "react-router-dom";

const CommunityChat = () => {
  return (
    <>
      <div className="col-lg-8">
        <div
        style={{
          backgroundColor: "lightgray",
          marginLeft: "100px",
          marginTop: "20px", 
          height: "300px",
          alignContent: "center",
          mozBoxShadow: "inset 0 0 10px #000000",
          webkitBoxShadow: "inset 0 0 10px #000000",
          boxShadow: "inset 0 0 10px #000000",

        }}>
      <h2 style={{ textAlign: "center", paddingTop: " 50px"}}>Community Chat Room</h2>
      <div style={{
       display: "flex",
       justifyContent: "center",
       paddingTop: "50px"
      }}>
        <Link to="/chatroom">
        <WhiteButton title="Join Room"/>
        </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default CommunityChat;
