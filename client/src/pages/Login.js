import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat6.jpg"
import Footer from "../components/Footer/Footer";
import SignupCardContent from "../utils/signupCardContent";
import SignupCards from "../components/Cards/SignupCards";
import LoginForm from "../components/Forms/LoginForm";
import LoginIntro from "../components/Headings/LoginIntro";

const title = "Login";
const caption = "Welcome Back!";

const Login = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhiteBasic />
        <Banner title={title} caption={caption} url={catImage}/>
        <div 
        style={{marginBottom: "110px"}}
        className="container">
            <div className="row">
                <div className="col-lg-8">
                    <LoginIntro />
                    <LoginForm />
                </div>
                <div className="col-lg-4">
                <h5
                style={{paddingLeft: "20px"}}
                >Members Benefits</h5>
                {SignupCardContent.map((card, i) => (
                    <SignupCards cardData={card} key={i} />
                    ))}
                </div>
            </div>
        </div>     
        <Footer />
        </>
     );
}
 
export default Login;