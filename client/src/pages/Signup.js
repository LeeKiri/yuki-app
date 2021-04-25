import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat7.jpg"
import SignupForm from "../components/Forms/SignupForm";
import SignupIntro from "../components/Headings/SignupIntro";
import Footer from "../components/Footer/Footer";
import SignupCardContent from "../utils/signupCardContent";
import SignupCards from "../components/Cards/SignupCards";
import CatForm from "../components/Forms/CatForm";
import { useState } from "react"

const title = "Join Today"
const caption = "In a few simple steps signup to get our members benefits and meet the community"
 


const Signup = () => {
const [signup, setSignup] = useState(true) 

    return ( 
        <>
        <NavbarBlack />
        <NavbarWhiteBasic />
        <Banner title={title} caption={caption} url={catImage}/>
        <div 
        style={{marginBottom: "200px"}}
        className="container">
            <div className="row">
                <div className="col-lg-8">
                    <SignupIntro />
                    {signup ? <SignupForm setSignup={setSignup}/> : <CatForm />}
                </div>
                <div className="col-lg-4">
                <h5
                style={{paddingLeft: "20px"}}
                >What do I get?</h5>
                {SignupCardContent.map((card) => (
                    <SignupCards cardData={card} />
                    ))}
                </div>
            </div>
        </div>     
        <Footer />
        </>
     );
}
 
export default Signup;