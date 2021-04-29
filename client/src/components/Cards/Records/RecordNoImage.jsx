import Moment from "react-moment";

const RecordNoImg = ({ title, description, date }) => {
  return (
    <>
      <div style={{ margin: "auto", width: "80%", marginBottom: "20px" }} className="card">
        <div className="row no-gutters">
          <div className="col-12">
            <div 
            className="card-header">{title}</div>
            <div className="card-body">
              <p className="card-text">{description}</p>
              <footer>
                <small>
                  <Moment format="DD-MM-YYYY">{date}</Moment>
                </small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordNoImg;
