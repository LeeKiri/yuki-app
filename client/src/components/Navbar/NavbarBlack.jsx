import axios from "axios";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavbarBlack = () => {

  const logout = async () => {
  await axios.get("/logout")
  window.location.assign("/")
  };

  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Sign-up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/#aboutSection">About</HashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={logout} >Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
};

export default NavbarBlack;