import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/paws.jpg"

const title = "Dashboard"
const caption = "Upload images & track significant events along your journey together."

const Dashboard = () => {

    return ( 
        <>
        <NavbarBlack />
        <NavbarWhite />
        <Banner title={title} caption={caption} url={catImage}/>
        </>
     );
}
 
export default Dashboard;
