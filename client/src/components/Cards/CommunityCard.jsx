import "../../pages/community.css"
const CommunityCard = ({ img, title, guidelines }) => {
  return (
    <>
      <div className="col-md-12 col-lg-4 d-flex justify-content-center">
        <div className="card" id="communityCard">
          <img src={img} className="card-img-top" alt="funny cat" />
          <div className="card-img-overlay">
            <h5 id="cardTitle" className="card-title">
              {title}
            </h5>
          </div>
          <div className="card-body">
            <ul id="cardList" className="card-text">
              {guidelines}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
