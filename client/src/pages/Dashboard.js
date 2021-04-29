import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import catImage from "../images/cats/banner/paws.jpg";
import DashboardIntro from "../components/Headings/DashboardIntro";
import ImageForm from "../components/Forms/ImageForm";
import RecordImg from "../components/Cards/Records/RecordImg";
// import RecordNoImg from "../components/Cards/Records/RecordNoImg";
import Container from "../components/Container/Container";
import { useState, useEffect } from "react";
import axios from "axios";

const title = "Dashboard";
const caption =
  "Upload images to track significant events along your journey together.";

const Dashboard = () => {
  const [userName, setUsername] = useState();
  const [catName, setCatname] = useState();
  const [userId, setUserId] = useState();
  const [records, setRecords] = useState();

  useEffect(() => {
    loadUser()
  }, []);
  
  const loadUser=() => {
    axios
      .get("/api/user")
      .then((results) => {
        setUsername(results.data.username);
        setCatname(results.data.cat_name);
        setUserId(results.data._id)
        console.log(results.data)
      })
      .catch((err) => console.log(err));
    
  }

  return (
    <>
      <NavbarBlack />
      <NavbarWhite />
      <Banner title={title} caption={caption} url={catImage} />
      <DashboardIntro name={userName} />
      <ImageForm catName={catName} userId={userId}/>
      {/* render all logs in record cards */}
      <h5
        style={{
          textAlign: "center",
          fontSize: "25px",
          marginBottom: "50px",
        }}
      >
        Gallery
      </h5>
      <Container>
        <RecordImg />
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
