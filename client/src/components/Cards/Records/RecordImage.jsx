const RecordImg = ({ title, description, date, image }) => {
  return (
    <>
      <div className="card m-2" style={{ width: "15rem", 
    height: "fit-content"}}>
        <img className="card-img-top" src={image} alt="users cat" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <div
            className="card-footer"
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <small>{date}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordImg;
