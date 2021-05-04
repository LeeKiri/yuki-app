import WhiteButton from "../Button/WhiteButton";
import { Link } from "react-router-dom";

const HomePageForm = () => {
  return (
    <>
      <div
        className="container"
        id="getStartedDiv"
        style={{
          backgroundColor: "lightgray",
          width: "60%",
          padding: "30px 50px",
          margin: "auto",
          marginTop: "50px",
          borderRadius: "180px",
        }}
      >
        <div className="row">
          <div className="col">
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
              Get Started Today!
            </h4>
            <p style={{ textAlign: "center", marginBottom: "20px" }}>
              Join us today. It's easy to get started and only takes 5 minutes
              to set up your account.
            </p>
            <div className="row">
              <div
                style={{ textAlign: "right", marginBottom: "5px" }}
                className="col-lg-6 col-sm-12"
              >
                <Link to="/signup">
                  <WhiteButton title="Sign-up" />
                </Link>
              </div>
              <div
                style={{ textAlign: "left", marginBottom: "5px" }}
                className="col-lg-6 col-sm-12"
              >
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
