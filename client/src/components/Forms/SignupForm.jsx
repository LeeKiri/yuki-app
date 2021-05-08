import BlackButton from "../Button/BlackButton";
import axios from "axios";
import { useState } from "react";
import "../../pages/login-signup.css";

const SignupForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [catName, setCatname] = useState();
  const [adoptionDate, setAdoptionDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      catName,
      adoptionDate,
      password,
      password2,
    };

    axios.post("/api/signup", user).then((res) => {
      window.location = "/login";
    });
  };
  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username *</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control formSign-log"
            placeholder="Jane Smith"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address *</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control formSign-log"
            placeholder="janesmith@gmail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cats Name</label>
          <input
            onChange={(e) => setCatname(e.target.value)}
            type="text"
            className="form-control formSign-log"
            placeholder="Fluffy"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adoption Date</label>
          <input
            onChange={(e) => setAdoptionDate(e.target.value)}
            type="date"
            className="form-control formSign-log"
            placeholder="14/07/2021"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password * must be more than 6 characters
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control formSign-log"
            placeholder="password"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password *</label>
          <input
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            className="form-control formSign-log"
            placeholder="password"
            required
          />
        </div>
        <BlackButton title="submit" />
        <label className="form-label">* Required Fields</label>
      </form>
    </>
  );
};

export default SignupForm;
