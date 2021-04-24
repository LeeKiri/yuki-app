import "./video.css"

const VideoCard = ({ vidData: video }) => {
    return ( 
        <>
        <div className="container"  style={{display: "inline-block", margin: "auto"}}>
            <div className="row">
                <div className="col-lg-12">
                    {video.video}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default VideoCard;