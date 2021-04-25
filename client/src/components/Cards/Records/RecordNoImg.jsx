import cat from "../../../images/cats/cat2.jpg";

const RecordImg = () => {
  return (
    <>
      <div className="card m-2" style={{ width: "15rem", 
    height: "fit-content"}}>
        <img className="card-img-top" src={cat} alt="users cat" />
        <div className="card-body">
          <h5 className="card-title">Card title that wraps to a new line</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <div
            className="card-footer"
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <medium>14/07/2021</medium>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordImg;
