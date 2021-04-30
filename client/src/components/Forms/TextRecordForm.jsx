import BlackButton from "../Button/BlackButton";
import axios from "axios";
import { useState } from "react";

const TextRecordForm = ({ catName, userId }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  const uploadText = (e) => {
    let imageFormObj = {
      title,
      description,
      date,
      userId,
    };
    axios
      .post("/api/upload/text", imageFormObj)
      .then((data) => {
        if (data.data.success) {
          alert("file successfully uploaded");
          //todo: workout how to update records without page reload
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("error while uploading the file");
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadText();
  };
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div
          className="container"
          style={{
            backgroundColor: "lightgray",
            maxWidth: "100%",
            marginBottom: "60px",
          }}
        >
          <div className="row">
            <div className="col-lg-3">
              <div className="inputTitle mb-3">
                <label className="form-label mt-5 ml-5">Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ backgroundColor: "white", width: "85%" }}
                  type="text"
                  className="form-control ml-5"
                  placeholder="Enter a title"
                />
              </div>

              <div className="mb-3 mt-1 ml-5">
                <label className="form-label">Date</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  style={{ backgroundColor: "white", width: "100%" }}
                  type="date"
                  className="form-control"
                  placeholder="14/07/2021"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                Create A Text Record For {catName}
              </h4>
              <div className="inputComments mt-3 ml-5 mb-4">
                <label htmlFor="FormControlTextarea1">Description</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="logComments"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div style={{ marginTop: "150px" }} className="col-lg-3">
              <BlackButton title="submit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TextRecordForm;
