import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import catImage from "../images/cats/banner/paws.jpg"
import DashboardIntro from "../components/Headings/DashboardIntro";
import LogForm from "../components/Forms/LogForm";
import RecordImg from "../components/Cards/Records/RecordImg";
import RecordNoImg from "../components/Cards/Records/RecordNoImg";
import Container from "../components/Container/Container";

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
        {/* render all records in record cards */}
        <h5
        style={{
            textAlign: "center",
            fontSize: "25px",
            marginBottom: "50px"
        }}
        >History</h5>
           <Container 
           >
                    <RecordImg title="Playtime" date="14/02/2021" comment="today Yuki played a lot and chased the ball around. It as really cute"/>
                    <RecordNoImg />
                    <RecordImg title="Playtime" date="14/02/2021" comment="today Yuki played a lot and chased the ball around. It as really cute"/>
                    <RecordNoImg />
                    <RecordImg title="Playtime" date="14/02/2021" comment="today Yuki played a lot and chased the ball around. It as really cute"/>
                    <RecordNoImg />
                    <RecordImg title="Playtime" date="14/02/2021" comment="today Yuki played a lot and chased the ball around. It as really cute"/>
                    <RecordNoImg />
                    <RecordImg title="Playtime" date="14/02/2021" comment="today Yuki played a lot and chased the ball around. It as really cute"/>
                    <RecordNoImg />
            </Container>
        <Footer />
        </>
     );
}
 
export default Dashboard;
