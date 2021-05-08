import "../../pages/home.css";

const HomeCard = ({ cardData: card }) => {
  return (
    <>
      <div className="card" id="homecards">
        <img src={card.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.content}</p>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
