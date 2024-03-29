import BlackButton from "../Button/BlackButton";
import Alert from "react-bootstrap/Alert";

import axios from "axios";
import { useState } from "react";
import "../../pages/dashboard.css";

const ImageForm = ({ userId }) => {
  const [imageData, setImageData] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [showDanger, setShowDanger] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const uploadImage = (e) => {
    let imageFormObj = new FormData();
    imageFormObj.append("title", title);
    imageFormObj.append("description", description);
    imageFormObj.append("date", date);
    imageFormObj.append("userId", userId);
    imageFormObj.append("imageData", imageData);

     axios({
      method: "post",
      url: "/api/upload",
      data: imageFormObj,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((data) => {
        if (data.data.success) {
          setShowSuccess(true)
          window.location.reload();
        }
      })
      .catch((err) => {
       setShowDanger(true)
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImage();
  };
  return (
    <>
      <form id="imageForm" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <div
          className="formContainer"
        >
          <div className="row" id="formRow">
            <div className="col-12 col-lg-3">
              <div className="inputTitle mb-3">
                <label className="form-label mt-2 ml-5">Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control formDash ml-5 w-80"
                  placeholder="Enter a title"
                  id="titleInput"
                />
              </div>

              <div className="mb-3 mt-1 ml-5">
                <label className="form-label ">Date</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="form-control formDash w-100"
                  placeholder="14/07/2021"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
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
            <div id="imageSection" className="col-lg-3 col-12">
              <div className="inputImage mt-2 mr-4 mb-4">
                <label id="imageTitle" className="form-label mt-2" htmlFor="multerFile">
                  Upload an image
                </label>
                <br />
                <input
                  onChange={(e) => setImageData(e.target.files[0])}
                  type="file"
                  id="image"
                  name="image"
                  accept=".png, .jpg, .jpeg"
                />
              </div>
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

export default ImageForm;
