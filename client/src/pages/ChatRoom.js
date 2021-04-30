import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import catImage from "../images/cats/banner/catcommunity.jpg";
import Container from "../components/Container/Container";
import ChatRoomBox from "../components/CommunityChat/ChatRoomBox";

import { useEffect, useState } from "react";
import axios from "axios";

const title = "Community";

const ChatRoom = () => {
  const [userName, setUserName] = useState();

useEffect(() => {
 loadUser()
}, []);

  const loadUser = () => {
    axios
      .get("/api/user")
      .then((results) => {
        setUserName(results.data.username);
    
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <NavbarBlack />
      <NavbarWhite />
      <Banner title={title} url={catImage} />
      <Container>
          <ChatRoomBox userName={userName}/>
      </Container>
      <Footer />
    </>
  );
};

export default ChatRoom;
