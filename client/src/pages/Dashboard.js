import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import catImage from "../images/cats/banner/paws.jpg";
import DashboardIntro from "../components/Headings/DashboardIntro";
import LogForm from "../components/Forms/LogForm";
import RecordImg from "../components/Cards/Records/RecordImg";
import RecordNoImg from "../components/Cards/Records/RecordNoImg";
import Container from "../components/Container/Container";
import { useState, useEffect } from "react";
import axios from "axios";

const title = "Dashboard";
const caption =
  "Upload images & track significant events along your journey together.";

const Dashboard = () => {
  const [userName, setUsername] = useState();
  const [catName, setCatname] = useState();
  const [logs, setLogs] = useState();

  useEffect(() => {
    axios
      .get("/api/user")
      .then((results) => {
        setUsername(results.data.username);
        setCatname(results.data.cat_name);
      })
      .catch((err) => console.log(err));
  }, []);


//   useEffect(() => {
//     axios
//       .get("/api/log")
//       .then((results) => {
//         console.log(results);
//         setLogs(results);
//       })
//       .catch((err) => console.log(err));
//   }, []);
  return (
    <>
      <NavbarBlack />
      <NavbarWhite />
      <Banner title={title} caption={caption} url={catImage} />
      <DashboardIntro name={userName} />
      <LogForm catName={catName} />
      {/* render all logs in record cards */}
      <h5
        style={{
          textAlign: "center",
          fontSize: "25px",
          marginBottom: "50px",
        }}
      >
        History
      </h5>
      <Container>
       logs={logs}
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
