const Banner = (props) => {
    console.log(props)
    return ( 
            <div className="row">
                <div className="col">
                    <div className="bannerimage"
                    style={{
                        
                        background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))", 
                        backgroundImage: `url(${props.url})`,
                        height: "350px",
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "relative",
                        marginBottom: "50px"
                        
                    }}
                    ></div>
                    <h2 style={{ textShadow: "3px 3px 5px #000000", paddingBottom: "200px"}}className="carousel-caption">{props.title}</h2>
                    <p style={{ textShadow: "3px 3px 5px #000000", paddingBottom: "120px", fontFamily: "serif", fontSize: "25px"}}className="carousel-caption">{props.caption}</p>
                </div>
            </div>
     );
}
 
export default Banner;