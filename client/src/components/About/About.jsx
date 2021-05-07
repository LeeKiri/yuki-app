import yuki1 from "../../images/yuki/yuki1.png";
import yuki2 from "../../images/yuki/yuki2.jpg";
import yuki3 from "../../images/yuki/yuki3.jpg";
import yuki4 from "../../images/yuki/yuki4.jpg";
import yuki5 from "../../images/yuki/yuki5.jpg";

const About = () => {
  return (
    <div
    id="aboutSection"
      style={{
        marginTop: "80px",
        padding: "30px",
        backgroundColor: "lightgrey",
        maxWidth: "100%",
        marginBottom: "200px",
        paddingBottom: "80px",
      }}
      className="container"
    >
      <div className="row">
        <div className="col-lg-12">
          <h4 style={{ textAlign: "center" }}>About Us</h4>
          <br />
          <p
            style={{
              fontSize: "larger",
              textAlign: "center",
              width: "60%",
              margin: "auto",
            }}
          >
            Meet Yuki, it means Snow in Japanese.
          </p>
          <br />
          <p style={{ textAlign: "center", width: "70%", margin: "auto" }}>
            We met Yuki when he started sleeping outside my office window. We
            could see he was in bad shape so we started feeding him. He returned
            everyday for food and we were able to get a better look at him. He
            had some kind of eye infection, we thought he could be blind. We
            decided to trap him and take him to the vet. The vet desexed him,
            immunised him and told us he had ulcers on his eye balls so he might
            need surgery. We took him home and had to give him eye drops every
            day- which was not easy! Yuki was very scared of humans so taking
            him out of his cage twice a day to put drops in wasnt fun for any of
            us! We started contact slowly by patting him a wooden spoon, then
            with a glove and eventually with our hands.
          </p>
          <br />
          <p style={{ textAlign: "center", width: "60%", margin: "auto" }}>
            After a long road he came to love us and his eyes cleared up! Now
            he's happy and sociable, he loves to play and have cuddles. He's
            found his forever home and he is super thankful!
          </p>
          <br />
          <h4 style={{ textAlign: "center", fontWeight: "bolder" }}>
            Yuki's Journey
          </h4>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={{textAlign: "center", margin: "auto"}}>
          <div
          id="imageRow"
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <img
              style={{ height: "230px" }}
              src={yuki1}
              alt="before pic of Yuki"
            />
            <img
              style={{ height: "230px" }}
              src={yuki2}
              alt="before pic of Yuki"
            />
            <img
              style={{ height: "230px" }}
              src={yuki3}
              alt="before pic of Yuki"
            />
            <img
              style={{ height: "230px" }}
              src={yuki4}
              alt="before pic of Yuki"
            />
            <img
              style={{ height: "230px" }}
              src={yuki5}
              alt="before pic of Yuki"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
