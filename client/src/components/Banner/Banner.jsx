import "./banner.css";

const Banner = (props) => {
    return ( 
            <div className="row">
                <div className="col">
                    <div className="bannerimage"
                    style={{
                        
                        backgroundImage: { props.url },
                        height: "300px",
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "relative"
                        
                    }}
                    ></div>
                    <h2 style={{ paddingBottom: "150px"}}className="carousel-caption">{props.title}</h2>
                    <p style={{ paddingBottom: "80px", fontFamily: "serif", fontSize: "20px"}}className="carousel-caption">{props.caption}</p>
                </div>
            </div>
     );
}
 
export default Banner;