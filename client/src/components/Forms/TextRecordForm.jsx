import BlackButton from "../Button/BlackButton";
import Alert from "react-bootstrap/Alert";

import "../../pages/dashboard.css";

import axios from "axios";
import { useState } from "react";

const TextRecordForm = ({ catName, userId }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [showDanger, setShowDanger] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
          setShowSuccess(true)
          //todo: workout how to update records without page reload
          window.location.reload();
        }
      })
      .catch((err) => {
        setShowDanger(true)
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
            <div className="col-12 col-lg-3"  id="formRow">
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
            <div id="textRecordbtnDiv" className="col-lg-3">
              <BlackButton title="submit" />
            </div>
          </div>
        </div>
      </form>
      {showDanger && (
            <Alert className="text-center" showDanger={showDanger} variant="danger" onClose={() => setShowDanger(false)} dismissible>
              There was a problem with the upload
            </Alert>
          )}
      {showSuccess && (
            <Alert className="text-center" showSuccess={showSuccess} variant="success" onClose={() => setShowSuccess(false)} transition>
              File uploaded successfully!
            </Alert>
          )}
    </>
  );
};

export default TextRecordForm;
