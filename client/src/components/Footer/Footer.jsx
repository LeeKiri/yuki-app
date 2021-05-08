import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import catIcon from "../../images/catblue.png";
import "../../pages/allPages.css";

const Footer = () => {
  return (
    <>
      {/* display on medium and large screens */}
      <footer
        className="footer fixed-bottom bg-secondary d-none d-md-block"
        id="homeFooter"
      >
        <div
          className="card-footer bg-dark footer-font-style footer-position"
          id="footer"
        >
          <img id="footerIcon" src={catIcon} alt="cat logo" />
          <h6 id="footerBrand">Yuki</h6>
          <h5 id="footerHeading">Find us on</h5>

          <FontAwesomeIcon
            className="footerIcon"
            size="lg"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="footerIcon"
            size="lg"
            icon={faInstagram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="footerIcon"
            size="lg"
            icon={faYoutube}
          ></FontAwesomeIcon>
        </div>
        <div className="containerCopy">
          <div className="row">
            <div className="col">
              <h6 className="copyHeading text-center text-light">
                &copy; Copyright 2021 - yuki.com.au
              </h6>
            </div>
          </div>
        </div>
      </footer>
      {/* display on small screens */}
      <footer
        id="smallFooter"
        className="footer fixed-bottom bg-secondary d-sm-block d-md-none"
      >
        <div
          className="card-footer bg-dark footer-font-style footer-position d-flex justify-content-start"
          id="footer"
        >
          <img id="footerIcon" src={catIcon} alt="cat logo" />
          <h6 id="footerBrand">Yuki</h6>
        </div>
        <div className="footerIconsSmall">
          <h5 id="footerHeadingSmall">Find us on</h5>
          <FontAwesomeIcon
            className="footerIcon"
            size="lg"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="footerIcon"
            size="lg"
            icon={faInstagram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="footerIcon"
            size="lg"
            icon={faYoutube}
          ></FontAwesomeIcon>
        </div>
        <div className="containerCopy d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <h6 className="copyHeading text-center text-light">
                &copy; Copyright 2021 - yuki.com.au
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
