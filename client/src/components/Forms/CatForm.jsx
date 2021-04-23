import BlackButton from "../Button/BlackButton"
const CatForm = () => {
    return (  
        <>
        <form 
        style={{
            width: "60%",
            margin: "auto",
            marginBottom: "300px"
        }}
        >
        <h5>Now enter your cats details</h5>
        <br />
            <div className="mb-3">
                <label className="form-label">Name *</label>
                <input
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Age *</label>
                <input 
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Enter estimated age" />
            </div>
            <div className="mb-3">
                <label className="form-label">Adoption date *</label>
                <input 
                style={{backgroundColor: "lightgray"}}
                type="date" className="form-control" />
            </div>
             <BlackButton title="submit" />
                <label style={{float: "right", verticalAlign: "center"}} className="form-label">* Required Fields</label>

        </form>
        </>
    );
}
 
export default CatForm;