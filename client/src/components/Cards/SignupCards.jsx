const SignupCard = ({ cardData: card }) => {
  return (
    <>
        <div
          className="card"
          style={{
            width: "15rem",
            border: "none",
            display: "inline-block",
            verticalAlign: "top",
            margin: "20px",
            marginTop: "10px",
          }}
        >
          <img src={card.image} className="card-img-top" alt="" />
          <div className="card-img-overlay">
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px darkgrey, 0 0 5px grey",
                color: "white",
                paddingTop: "40px",
                textAlign: "center",
              }}
              className="card-title"
            >
              {card.title}
            </h2>
          </div>
        </div>
    </>
  );
};

export default SignupCard;
