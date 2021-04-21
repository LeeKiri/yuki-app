import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat4.jpg"

const title = "Welcome To Yuki"
const caption = "A tool to guide and support you through your Cat adoption. "

const Home = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhiteBasic />
        <Banner title={title} caption={caption} url={catImage}/>
        </>
     );
}
 
export default Home;