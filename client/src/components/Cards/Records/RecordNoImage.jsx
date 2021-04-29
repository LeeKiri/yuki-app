const RecordNoImg = ({ title, description, date }) => {
  return (
    <>
      <div className="card m-2 h-auto" style={{ width: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
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

export default RecordNoImg;
