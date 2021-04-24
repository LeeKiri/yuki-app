import NavbarBlack from "../components/Navbar/NavbarBlack";
import NavbarWhite from "../components/Navbar/NavbarWhite";
import Banner from "../components/Banner/Banner";
import catImage from "../images/cats/banner/cat1.jpg"
import videos from "../utils/video"
import VideoCard from "../components/Video/Video"
import Footer from "../components/Footer/Footer";

const title = "Video Library"
const caption = "Advice from cat specialists to help your adoption go smoothly."

const Video = () => {
    return ( 
        <>
        <NavbarBlack />
        <NavbarWhite />
        <Banner title={title} caption={caption} url={catImage} />
        
        {videos.map((vid) => (
          <VideoCard vidData={vid}
          />
        ))}

        <Footer />
        </>
     );
}
 
export default Video;