
const HomeCard = ({cardData: card}) => {
    return ( 
        <>
        <div className="card" style={{width: "18rem", height: "367px", border: "none", display: "inline-block", verticalAlign: "top", margin: "20px"}}>
  <img src={card.image} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">{card.content}</p>
  </div>
</div>
</>
     );
}
 
export default HomeCard;