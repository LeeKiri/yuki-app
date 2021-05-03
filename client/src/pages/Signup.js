import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat7.jpg";
import SignupIntro from "../components/Headings/SignupIntro";
import Footer from "../components/Footer/Footer";
import SignupCardContent from "../utils/signupCardContent";
import SignupCards from "../components/Cards/SignupCards";
import Container from "../components/Container/Container";
import SignupForm from "../components/Forms/SignupForm";

const title = "Join Today";
const caption =
  "In a few simple steps signup to get our members benefits and meet the community";

const Signup = () => {
  return (
    <>
      <NavbarBlack />
      <NavbarWhiteBasic />
      <Banner title={title} caption={caption} url={catImage} />
      <div className="row">
        <div className="col-lg-8">
          <SignupIntro />
          <SignupForm />
        </div>
        <div className="col-lg-4">
          <h4 style={{ paddingLeft: "20px", marginBottom: "40px" }}>What do I get?</h4>
          {SignupCardContent.map((card, i) => (
            <SignupCards cardData={card} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
