import BlackButton from "../Button/BlackButton";
import "../../pages/dashboard.css";

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
          className="formContainer"
        >
          <div className="row">
            <div className="col-lg-3">
              <div className="inputTitle mb-3">
                <label className="form-label mt-2 ml-5">Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control formDash ml-5 w-85"
                  placeholder="Enter a title"
                  id="titleInput"
                />
              </div>

              <div className="mb-3 mt-1 ml-5">
                <label className="form-label">Date</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="form-control formDash w-100"
                  placeholder="14/07/2021"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inputComments mt-1 ml-5 mb-4">
                <label htmlFor="FormControlTextarea1">Description</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control formDash"
                  id="logComments"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div id="btnDiv" className="col-lg-3">
              <BlackButton title="submit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TextRecordForm;
