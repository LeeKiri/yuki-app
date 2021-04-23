import BlackButton from "../Button/BlackButton"

const LogForm = () => {
    return ( 
        <>
        <form>
        <div className="container"
        style={{backgroundColor: "lightgray", maxWidth: "100%", marginBottom: "200px"}}
        >
            <div className="row">
                <div className="col-lg-3">
                    <div className="inputTitle mb-3">
                        <label className="form-label mt-5 ml-5">Title</label>
                        <input
                            style={{backgroundColor: "white"}}
                            type="text" className="form-control ml-5" placeholder="Enter a title" />
                    </div>
                    <div className="inputDate mb-3">
                        <label className="form-label mt-1 ml-5">Date</label>
                        <input
                            style={{backgroundColor: "white"}}
                            type="date" className="form-control ml-5" />
                    </div>
                </div>
                <div className="col-lg-6"> 
                    <h4
                    style={{textAlign: "center", fontSize: "20px", marginLeft: "45px", marginTop: "10px"}}
                    >Create a Log</h4>
                    <div className="inputComments mt-3 ml-5 mb-4">
                        <label for="FormControlTextarea1">Comments</label>
                        <textarea class="form-control" id="logComments" rows="5"></textarea>
                    </div>
                </div>
                <div className="col-lg-3"> 
                    <div className="inputImage mt-5 mr-4 mb-4">
                        <label class="form-label mt-2" for="customFile">Upload an image</label>
                        <input type="file" id="myFile" name="filename" />
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