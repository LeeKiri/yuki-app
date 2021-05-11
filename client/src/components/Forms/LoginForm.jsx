import BlackButton from "../Button/BlackButton";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import "../../pages/login-signup.css";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios.post("/api/login", user).then((res) => {
      setShow(false)
      window.location = "/dashboard";
    })
    .catch(setShow(true))
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
        {show && (
            <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
              Wrong email or password
            </Alert>
          )}
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value.trim())}
            type="text"
            className="form-control formSign-log"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value.trim())}
            type="text"
            className="form-control formSign-log"
            placeholder="Enter password"
          />
        </div>
        <BlackButton title="login" />
      </form>
    </>
  );
};

export default LoginForm;
