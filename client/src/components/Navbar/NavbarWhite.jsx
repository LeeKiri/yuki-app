import { NavLink } from "react-router-dom";
import CatIcon from "../../images/catblue.png";

const NavbarWhite = () => {
  return (
    <>
      {/* nav for large screen */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block d-xl-block">
        <div id="navContainerWhite" className="container-fluid">
          <img id="icon" className="navbar-icon" src={CatIcon} alt="cat icon" />
          <h1 className="navbar-brand">Yuki</h1>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/video">
                Video Library
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/community"
              >
                Community
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* nav on small and med screen */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-sm-block d-md-block d-lg-none">
        <div id="navContainerWhite" className="container-fluid">
          <img id="icon" className="navbar-icon" src={CatIcon} alt="cat icon" />
          <h1 className="navbar-brand">Yuki</h1>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
          <div className="btn-group ml-auto">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <NavLink className="dropdown-item" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="dropdown-item"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/video"
                >
                  Video Library
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/community"
                >
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarWhite;
