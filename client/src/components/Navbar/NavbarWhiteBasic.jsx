import CatIcon from "../../images/catblue.png";
import "../../pages/allPages.css";

const NavbarWhite = () => {
  return (
    <nav id="navWhite" className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navContainerWhite" className="container-fluid">
        <img id="icon" className="navbar-icon" src={CatIcon} alt="cat icon" />
        <h1 className="navbar-brand">Yuki</h1>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
      </div>
    </nav>
  );
};

export default NavbarWhite;
