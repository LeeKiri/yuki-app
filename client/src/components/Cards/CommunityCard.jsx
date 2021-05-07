const CommunityCard = ({ img, title, guidelines }) => {
  return (
    <>
      <div className="col-lg-3">
        <div
          className="card"
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "top",
            margin: "20px",
            marginBottom: "200px",
            MozBoxShadow: "inset 0 0 10px #000000",
            WebkitBoxShadow: "inset 0 0 10px #000000",
            boxShadow: "inset 0 0 10px #000000",
          }}
        >
          <img src={img} className="card-img-top" alt="funny cat" />
          <div className="card-img-overlay">
            <h5 style={{ fontSize: "30px", textShadow:
                  "1px 1px 2px black, 0 0 25px darkgrey, 1px 1px 2px black",
                color: "white",
                paddingTop: "40px",
                textAlign: "center", }} className="card-title">
              {title}
            </h5>
            </div>
            <div className="card-body">
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
