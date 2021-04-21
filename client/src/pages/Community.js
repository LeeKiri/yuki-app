import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat9.jpg"

const title = "Community"
const caption = "Ask questions, find local vets and connect with people on a similar journey "
const Community = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhite />
        <Banner title={title} caption={caption} url={catImage}/>
        </>
     );
}
 
export default Community;