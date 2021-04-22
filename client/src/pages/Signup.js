import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat7.jpg"
import SignupForm from "../components/Forms/HomePageForm";
import SignupIntro from "../components/Headings/SignupIntro";
import Footer from "../components/Footer/Footer";

const title = "Join Today"
const caption = "In a few simple steps signup to get all of the members benefits and meet our community"

const Signup = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhiteBasic />
        <Banner title={title} caption={caption} url={catImage}/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <SignupIntro />
                    <SignupForm />
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Signup;