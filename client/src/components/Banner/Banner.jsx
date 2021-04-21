const Banner = (props) => {
    console.log(props)
    return ( 
            <div className="row">
                <div className="col">
                    <div className="bannerimage"
                    style={{
                        
                        background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))", 
                        backgroundImage: `url(${props.url})`,
                        height: "350px",
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