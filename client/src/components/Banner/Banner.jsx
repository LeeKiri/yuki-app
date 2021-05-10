const Banner = (props) => {
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
                    <h2 className="bannerTitle carousel-caption">{props.title}</h2>
                    <p className="bannerP carousel-caption">{props.caption}</p>
                </div>
            </div>
     );
}
 
export default Banner;