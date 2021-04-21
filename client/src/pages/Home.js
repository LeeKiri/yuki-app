import NavbarWhiteBasic from "../components/Navbar/NavbarWhiteBasic";
import NavbarBlack from "../components/Navbar/NavbarBlack";
import Banner from "../components/Banner/Banner"

const title = "Welcome To Yuki"
const caption = "A tool to guide and support you through your Cat adoption. "
const url = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../images/cats/banner/cat1 (2).jpg")"

const Home = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhiteBasic />
        <Banner title={title} caption={caption} url={url}/>
        </>
     );
}
 
export default Home;