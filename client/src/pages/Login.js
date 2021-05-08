import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat6.jpg";
import Footer from "../components/Footer/Footer";
import SignupCardContent from "../utils/signupCardContent";
import SignupCards from "../components/Cards/SignupCards";
import LoginForm from "../components/Forms/LoginForm";
import LoginIntro from "../components/Headings/LoginIntro";
import Container from "../components/Container/Container";

import "./login-signup.css";

const title = "Login";
const caption = "Welcome Back!";

const Login = () => {
  return (
    <>
      <NavbarBlack />
      <NavbarWhiteBasic />
      <Banner title={title} caption={caption} url={catImage} />
      <Container>
        <div className="col-lg-8 col-12">
          <LoginIntro />
          <LoginForm />
        </div>
        <div id="loginCards" className="col-lg-4 col-12">
          <h5 style={{ paddingLeft: "20px" }}>Members Benefits</h5>
          {SignupCardContent.map((card, i) => (
            <SignupCards cardData={card} key={i} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
