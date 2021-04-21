import { Link } from "react-router-dom";
import CatIcon from "../../images/catblue.png";

const Links = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div style={{ paddingTop: "0px", paddingBottom: "0px"}}className="container-fluid">
        <img style={{ width: "50px"}} className="navbar-icon" src={ CatIcon } alt="cat icon"/>
      <h1 style={{ fontSize: "25px", paddingLeft: "20px" }}className="navbar-brand">Yuki</h1>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/video">Video Library</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/community">Community</Link>
        </li>
      </ul>
      </div>
</nav>

     );
}
 
export default Links;