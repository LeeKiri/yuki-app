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
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse blackLIs" id="navbarNav">
      <ul className="navbar-nav ml-auto list-group list-group-horizontal blackLIs">
        <li className="nav-item pl-3">
          <Link className="nav-link " aria-current="page" to="/signup">Sign-up</Link>
        </li>
        <li className="nav-item pl-3">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item pl-3">
          <HashLink className="nav-link" to="/#aboutSection">About</HashLink>
        </li>
        <li className="nav-item pl-3">
          <Link className="nav-link" onClick={logout} >Logout</Link>
        </li>
      </ul>
    </div>
</nav>
</>
  );
};

export default NavbarBlack;