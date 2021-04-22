import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import catIcon from "../../images/catblue.png"
const Footer = () => {
    return ( 
        <>
        <footer 
        style={{marginTop: "2%"}}
           className="footer fixed-bottom bg-secondary" id="homeFooter">
            <div    
                className="card-footer bg-dark footer-font-style footer-position"
                id="footer" 
                style={{ display: "flex", alignItems: "center", maxWidth: "100%", height: "65px"}} >
               
            <img style={{ marginLeft: "20px", width: "50px" }}  src={catIcon} alt="cat logo" />
            <h6
            style={{ color: "white", fontSize: "25px", fontWeight: "400", textAlign: "left", marginLeft: "20px"}}
            >Yuki</h6>   
            <h5 style={{color: "white", marginLeft: "auto"}}>Find us on</h5>
            
            <FontAwesomeIcon style={{color: "white", marginLeft: "20px"}} size="lg" icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon style={{color: "white", marginLeft: "20px"}} size="lg" icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon style={{color: "white", marginLeft: "20px"}} size="lg" icon={faYoutube}></FontAwesomeIcon>
           
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