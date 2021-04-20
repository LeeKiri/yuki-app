import { Link } from "react-router-dom";

const NavbarBlack = () => {
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
          <Link className="nav-link" href="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
};

export default NavbarBlack;