import { Link } from "react-router-dom";
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/video">
                Video Library
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">
                Community
              </Link>
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
                <Link className="dropdown-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/video">
                  Video Library
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/community">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarWhite;
