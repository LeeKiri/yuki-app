import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat7.jpg";
import SignupForm from "../components/Forms/SignupForm";
import SignupIntro from "../components/Headings/SignupIntro";
import Footer from "../components/Footer/Footer";
import SignupCardContent from "../utils/signupCardContent";
import SignupCards from "../components/Cards/SignupCards";
import Container from "../components/Container/Container";

const title = "Join Today";
const caption =
  "In a few simple steps signup to get our members benefits and meet the community";

const Signup = () => {
  return (
    <>
      <NavbarBlack />
      <NavbarWhiteBasic />
      <Banner title={title} caption={caption} url={catImage} />
      <Container>
        <SignupIntro />
        <SignupForm />
        <div className="col-lg-4">

        {SignupCardContent.map((card) => (
          <SignupCards cardData={card} />
        ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
