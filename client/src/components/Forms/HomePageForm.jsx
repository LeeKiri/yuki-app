import WhiteButton from "../Button/WhiteButton";
import { Link } from "react-router-dom";

const HomePageForm = () => {
  return (
    <>
      <div className="container" id="getStartedDiv">
        <div className="row">
          <div className="col">
            <h4 id="getStartedHeading">Get Started Today!</h4>
            <p id="formP">
              Join us today. It's easy to get started and only takes 5 minutes
              to set up your account.
            </p>
            <div className="row">
              <div id="homeBtnDiv" className="col-lg-12">
                <Link to="/signup">
                  <WhiteButton title="Sign-up" />
                </Link>
                <Link to="/login">
                  <WhiteButton title="Login" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageForm;
