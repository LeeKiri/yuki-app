import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat4.jpg";
import HomeIntro from "../components/Headings/HomeIntro";
import HomeCards from "../components/Cards/HomeCard";
import HomeCardContent from "../utils/homeCardContent";
import HomePageForm from "../components/Forms/HomePageForm";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

import "./home.css";

const title = "Welcome To Yuki!";
const caption = "A tool to support you through your cat adoption. ";

const Home = ({ loggedIn }) => {
  console.log(loggedIn, "home")
  return (
    <>
      <NavbarBlack loggedIn={loggedIn} />
      {loggedIn ? (<NavbarWhite />) : (<NavbarWhiteBasic />)}
      <Banner title={title} caption={caption} url={catImage} />
      <HomeIntro />
      <div id="containerDiv" className="container">
        <div className="row">
          <div id="cardDivHome" className="col">
            {HomeCardContent.map((card, i) => (
              <HomeCards key={i} cardData={card} />
            ))}
          </div>
        </div>
      </div>
      <HomePageForm />
      <About />
      <Footer />
    </>
  );
};

export default Home;
