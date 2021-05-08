import yuki1 from "../../images/yuki/yuki1.png";
import yuki2 from "../../images/yuki/yuki2.jpg";
import yuki3 from "../../images/yuki/yuki3.jpg";
import yuki4 from "../../images/yuki/yuki4.jpg";
import yuki5 from "../../images/yuki/yuki5.jpg";

import "../../pages/home.css";

const About = () => {
  return (
    <div id="aboutSection" className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4 id="aboutheading">About Us</h4>
          <br />
          <p id="aboutP">Meet Yuki, it means Snow in Japanese.</p>
          <br />
          <p className="aboutPBig">
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
          <p className="aboutPBig">
            After a long road he came to love us and his eyes cleared up! Now
            he's happy and sociable, he loves to play and have cuddles. He's
            found his forever home and he is super thankful!
          </p>
          <br />
          <h4 id="journeyHeading">Yuki's Journey</h4>
          <br />
        </div>
      </div>
      <div className="row">
        <div id="imgDiv" className="col-lg-12">
          <div id="imageRow">
            <img className="imgYuki" src={yuki1} alt="before pic of Yuki" />
            <img className="imgYuki" src={yuki2} alt="before pic of Yuki" />
            <img className="imgYuki" src={yuki3} alt="before pic of Yuki" />
            <img className="imgYuki" src={yuki4} alt="before pic of Yuki" />
            <img className="imgYuki" src={yuki5} alt="before pic of Yuki" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
