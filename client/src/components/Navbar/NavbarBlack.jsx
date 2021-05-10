import axios from "axios";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarBlack = ({ loggedIn }) => {
  console.log(loggedIn, "isloggedin in component");
  const logout = async () => {
    await axios.get("/logout");
    window.location.assign("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-xlg navbar-dark bg-dark">
        <div className="navbar-collapse blackLIs ml-auto" id="navbarNav">
          <ul className="navbar-nav justify-content-end list-group list-group-horizontal blackLIs">
            {loggedIn || (
              <li className="nav-item pl-3">
                <Link className="nav-link" activeClassName="active" exact to="/">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item pl-3">
              <HashLink
                className="nav-link"
                activeClassName="active"
                to="/#aboutSection"
              >
                About
              </HashLink>
            </li>
            {loggedIn || (
              <li className="nav-item pl-3">
                <Link
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/signup"
                >
                  Sign-up
                </Link>
              </li>
            )}
            {loggedIn ? (
              <li className="nav-item pl-3">
                <Link className="nav-link" onClick={logout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item pl-3">
                <Link className="nav-link" activeClassName="active" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarBlack;
