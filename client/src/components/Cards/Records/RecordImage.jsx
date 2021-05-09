import Moment from "react-moment";

const RecordImg = ({ title, description, date, image }) => {
  return (
    <>
      <div
        className="card imageCard"
      >
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-8">
            <div className="card-header imgSmallHead">{title}</div>
            <div className="card-body">
              <p className="imageTxt card-text">{description}</p>
              <footer>
                <small>
                  <Moment format="DD-MM-YYYY">{date}</Moment>
                </small>
            <img
              src={image}
              alt="thumbnail record"
              className="
              d-md-none
              img-thumbnail img-fluid imageimgSmall"
            />

              </footer>
            </div>
          </div>
          <div className="col-sm-1 col-md-4 d-none d-md-block">
            <img
              src={image}
              alt="thumbnail record"
              className="
              
              img-thumbnail img-fluid imageimg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordImg;
