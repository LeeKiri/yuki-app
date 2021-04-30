import Moment from "react-moment";

const RecordImg = ({ title, description, date, image }) => {
  return (
    <>
      <div
        style={{ margin: "auto", width: "80%", marginBottom: "20px" }}
        className="card"
      >
        <div className="row no-gutters">
          <div className="col-8">
            <div className="card-header">{title}</div>
            <div className="card-body">
              <p className="card-text">{description}</p>
              <footer>
                <small>
                  <Moment format="DD-MM-YYYY">{date}</Moment>
                </small>
              </footer>
            </div>
          </div>
          <div className="col-4">
            <img
              style={{ width: "200px", float: "right"}}
              src={image}
              alt="thumbnail record"
              class="img-thumbnail img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordImg;
