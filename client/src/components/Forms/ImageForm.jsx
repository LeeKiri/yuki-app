import BlackButton from "../Button/BlackButton";
import axios from "axios";
import { useState } from "react";

const ImageForm = ({ catName, userId }) => {
  const [imageData, setImageData] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  const uploadImage = async (e) => {
    let imageFormObj = new FormData();
    imageFormObj.append("title", title);
    imageFormObj.append("description", description);
    imageFormObj.append("date", date);
    imageFormObj.append("userId", userId);
    imageFormObj.append("imageData", imageData);

    await axios({
      method: "post",
      url: "/api/upload",
      data: imageFormObj,
      headers: { "Content-Type": "multipart/form-data" },
    })
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
    await uploadImage();
  };
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
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
                Create a Log for {catName}
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
            <div className="col-lg-3">
              <div className="inputImage mt-5 mr-4 mb-4">
                <label className="form-label mt-2" htmlFor="multerFile">
                  Upload an image
                </label>
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
    </>
  );
};

export default ImageForm;
