import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat4.jpg";
import HomeIntro from "../components/Headings/HomeIntro"
import HomeCards from "../components/Cards/HomeCard";
import HomeCardContent from "../utils/homeCardContent"

const title = "Welcome To Yuki!"
const caption = "A tool to support you through your cat adoption. "

const Home = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhiteBasic />
        <Banner title={title} caption={caption} url={catImage}/>
        <HomeIntro />
        <div className="container">
            <div className="row">
                <div className="col">

        {HomeCardContent.map((card) => (
            <HomeCards cardData={card} />
        ))}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;