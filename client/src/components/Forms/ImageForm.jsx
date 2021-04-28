import BlackButton from "../Button/BlackButton"
import axios from "axios";
import { useState } from "react";

const LogForm = ({ catName }) => {

    const [imageData, setImageData] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();

    const uploadImage = (e) => {
        let imageFormObj = new FormData();
        imageFormObj.append(title, description, date);
        imageFormObj.append(imageData);
        axios.post("/api/upload", imageFormObj)
        .then((data) => {
            if(data.data.success) {
                alert("file successfully uploaded");
            }
        })
        .catch((err) => {
            alert("error while uploading the file");
            console.log(err)
        })
    } 


    const handleSubmit = (e) => {
        e.preventDefault();
        uploadImage()
    }
    return ( 
        <>
        <form
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
        >
        <div className="container"
        style={{backgroundColor: "lightgray", maxWidth: "100%", marginBottom: "60px"}}
        >
            <div className="row">
                <div className="col-lg-3">
                    <div className="inputTitle mb-3">
                        <label className="form-label mt-5 ml-5">Title</label>
                        <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                            style={{backgroundColor: "white"}}
                            type="text" className="form-control ml-5" placeholder="Enter a title" />
                    </div>
                    <div className="inputDate mb-3">
                        <label className="form-label mt-1 ml-5">Date</label>
                        <input
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            style={{backgroundColor: "white"}}
                            type="date" className="form-control ml-5" />

                    </div>
                </div>
                <div className="col-lg-6"> 
                    <h4
                    style={{textAlign: "center", fontSize: "25px", marginTop: "10px"}}
                    >Create a Log for {catName}</h4>
                    <div className="inputComments mt-3 ml-5 mb-4">
                        <label for="FormControlTextarea1">Description</label>
                        <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        class="form-control" id="logComments" rows="5"></textarea>
                    </div>
                </div>
                <div className="col-lg-3"> 
                    <div className="inputImage mt-5 mr-4 mb-4">
                        <label class="form-label mt-2" for="multerFile"
                        >Upload an image</label>
                        <input 
                        onchange={(e) => setImageData(URL.createObjectURL(e.target.files[0]))}
                        value={imageData}
                        type="file" id="myFile" name="filename" />
                    </div>
                    <BlackButton title="submit"/>
                </div>
            </div>
        </div>
        </form>
        </>
     );
}
 
export default LogForm;