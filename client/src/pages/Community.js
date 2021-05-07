import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat9.jpg";
import CommunityIntro from "../components/Headings/CommunityIntro";
import CommunityCard from "../components/Cards/CommunityCard";
import JoinChatBox from "../components/CommunityChat/JoinChatBox";
import cardImage from "../images/cats/cat3.jpg";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

const title = "Community";
const caption =
  "Ask questions, find local vets and connect with people on a similar journey ";
const cardTitle = "Guidelines Of Engagement";
const cardGuidelines = [
  "Be respectful and supportive.",
  "When you enter the chat introduce yourself",
  "No spamming.",
  "Dont use chat for personal business.",
  "Don't use multiple user names.",
  "Don't use offensive Language.",
  "Be patient and welcoming when new people enter the chat.",
  "The views expressed in the chat room are those of members of the public and are not necessarily those of Yuki.com.",
];

const Community = () => {
  return (
    <>
      <NavbarBlack />
      <NavbarWhite />
      <Banner title={title} caption={caption} url={catImage} />
      <CommunityIntro />
      <Container>
        <JoinChatBox />
        <CommunityCard
          title={cardTitle}
          img={cardImage}
          guidelines={cardGuidelines.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Community;
