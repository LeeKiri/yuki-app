import BlackButton from "../Button/BlackButton";
import axios from "axios";
import { useState } from "react";

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
        <form
          onSubmit={handleSubmit}
          style={{
            width: "60%",
            margin: "auto",
            marginBottom: "200px",
          }}
        >
          <div className="mb-3">
            <label className="form-label">Username *</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              style={{ backgroundColor: "lightgray" }}
              type="text"
              className="form-control"
              placeholder="Jane Smith"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address *</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "lightgray" }}
              type="text"
              className="form-control"
              placeholder="janesmith@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Cats Name</label>
            <input
              onChange={(e) => setCatname(e.target.value)}
              style={{ backgroundColor: "lightgray" }}
              type="text"
              className="form-control"
              placeholder="Fluffy"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Adoption Date</label>
            <input
              onChange={(e) => setAdoptionDate(e.target.value)}
              style={{ backgroundColor: "lightgray" }}
              type="date"
              className="form-control"
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
              style={{ backgroundColor: "lightgray" }}
              type="password"
              className="form-control"
              placeholder="password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password *</label>
            <input
              onChange={(e) => setPassword2(e.target.value)}
              style={{ backgroundColor: "lightgray" }}
              type="password"
              className="form-control"
              placeholder="password"
              required
            />
          </div>
          <BlackButton title="submit" />
          <label
            style={{ float: "right", verticalAlign: "center" }}
            className="form-label"
          >
            * Required Fields
          </label>
        </form>
    </>
  );
};

export default SignupForm;
