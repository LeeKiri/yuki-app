import "../../pages/video.css";

const VideoCard = ({ vidData: video }) => {
  return (
    <>
      <div className="col-lg-6">{video.video}</div>
    </>
  );
};

export default VideoCard;
