const CommunityCard = ({ img, title, guidelines }) => {
  return (
    <>
      <div className="col-lg-3">
        <div
          className="card"
          style={{
            width: "18rem",
            border: "none",
            display: "inline-block",
            verticalAlign: "top",
            margin: "20px",
            marginBottom: "200px",
          }}
        >
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 style={{ textAlign: "left" }} className="card-title">
              {title}
            </h5>
            <ul style={{ textAlign: "left" }} className="card-text">
              {guidelines}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
