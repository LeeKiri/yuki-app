import CatIcon from "../../images/cat1.PNG";

const NavbarWhite = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div style={{ paddingTop: "0px", paddingBottom: "0px"}}className="container-fluid">
        <img style={{ width: "30px"}} className="navbar-icon" src={ CatIcon } alt="cat icon"/>
      <h1 style={{ fontSize: "25px" }}className="navbar-brand">Yuki</h1>
      <div className="collapse navbar-collapse" id="navbarNav">
      </div>
    </div>
  </nav>
 
  
  );
};

export default NavbarWhite;