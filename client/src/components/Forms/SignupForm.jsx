import BlackButton from "../Button/BlackButton"
const SignupForm = () => {
    return ( 
        <>
        <form 
        style={{
            width: "60%",
            margin: "auto"
        }}
        >
        <h5>Sign-up now</h5>
        <br />
            <div className="mb-3">
                <label className="form-label">Username *</label>
                <input
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Jane Smith" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address *</label>
                <input 
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="janesmith@gmail.com" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password * must be more than 6 characters</label>
                <input 
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="password" />
            </div>
             <BlackButton title="submit" />
                <label style={{textAlign: "right"}} className="form-label">* Required Fields</label>

        </form>
        </>
     );
}
 
export default SignupForm;