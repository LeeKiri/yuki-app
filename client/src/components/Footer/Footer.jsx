import catIcon from "../../images/catblue.png"
const Footer = () => {
    return ( 
        <>
        <footer 
           className="footer fixed-bottom bg-secondary" id="homeFooter">
        <div className="container card-footer bg-dark footer-font-style footer-position"
            id="footer" style={{ display: "inline-block", alignContent: "left", maxWidth: "100%", height: "65px"}} >
            <div className="row">
                <div className="col-lg-6">
            <img style={{ width: "50px" }}  src={catIcon} alt="cat logo" />
            <h6
            style={{ color: "white", fontSize: "25px", fontWeight: "400", textAlign: "left" }}
            >Yuki</h6>   

                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
            
            <h5>Find us on</h5> 
            <i style={{color: "white"}} className="fab fa-facebook-f"></i>
            <i style={{color: "white"}} className="fab fa-instagram"></i>
            <i style={{color: "white"}} className="fab fa-youtube"></i>
            </div>
            </div>
        </div>
        <div className="container"
        style={{ height: "40px" }} >
            <div className="row">
                <div className="col">
        <h6 
            style={{ paddingTop: "10px" }}
            className="text-center text-light">  
            &copy; Copyright 2021 - yuki.com.au
        </h6>

                </div>
            </div>
        </div>
        </footer>
        </>
     );
}
 
export default Footer;