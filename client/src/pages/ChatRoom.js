import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import catImage from "../images/cats/banner/catcommunity.jpg";
import Container from "../components/Container/Container";
import ChatRoomBox from "../components/CommunityChat/ChatRoomBox";

const title = "Community";

const ChatRoom = () => {
  return (
    <>
      <NavbarBlack />
      <NavbarWhite />
      <Banner title={title} url={catImage} />
      <Container>
          <ChatRoomBox />
      </Container>
      <Footer />
    </>
  );
};

export default ChatRoom;
