import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import DashboardIntro from "../components/Headings/DashboardIntro";
import ImageForm from "../components/Forms/ImageForm";
import RecordImg from "../components/Cards/Records/RecordImage";
import RecordNoImg from "../components/Cards/Records/RecordNoImage";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

import { useState, useEffect } from "react";
import axios from "axios";

import catImage from "../images/cats/banner/paws.jpg";

const title = "Dashboard";
const caption =
  "Upload images to track significant events along your journey together.";

const Dashboard = () => {
  const [userName, setUsername] = useState();
  const [catName, setCatname] = useState();
  const [userId, setUserId] = useState();
  const [records, setRecords] = useState();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    axios
      .get("/api/user")
      .then((results) => {
        setUsername(results.data.username);
        setCatname(results.data.cat_name);
        setUserId(results.data._id);
        setRecords(results.data.images);
        console.log(results.data.images);
      })
      .catch((err) => console.log(err));
    
  }

  return (
    <>
      <NavbarBlack />
      <NavbarWhite />
      <Banner title={title} caption={caption} url={catImage} />
      <DashboardIntro name={userName} />
      <ImageForm catName={catName} userId={userId} />
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
        {records && records.map((x) => (
          x.image ?
        <RecordImg key={x._id} title={x.title} description= {x.description} image={x.image} date={x.date} />
        :
        <RecordNoImg key={x._id} title={x.title} description= {x.description} date={x.date} />
        ))
  
        }
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
