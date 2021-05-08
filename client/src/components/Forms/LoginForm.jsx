import BlackButton from "../Button/BlackButton";
import axios from "axios";
import { useState } from "react";
import "../../pages/login-signup.css";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios.post("/api/login", user).then((res) => {
      console.log(res);
      window.location = "/dashboard";
    });
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
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
