import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import catImage from "../images/cats/banner/paws.jpg"
import DashboardIntro from "../components/Headings/DashboardIntro";
import LogForm from "../components/Forms/LogForm";

const title = "Dashboard"
const caption = "Upload images & track significant events along your journey together."

const Dashboard = () => {

    return ( 
        <>
        <NavbarBlack />
        <NavbarWhite />
        <Banner title={title} caption={caption} url={catImage}/>
        <DashboardIntro />
        <LogForm />
        <Footer />
        </>
     );
}
 
export default Dashboard;
