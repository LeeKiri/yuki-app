import BlackButton from "../Button/BlackButton"

const LoginForm = () => {
    return (  
        <>
        <form 
        style={{
            width: "60%",
            margin: "auto",
            marginBottom: "300px"
        }}
        >
        <h4>Already a member?</h4>
        <h5>Login Here</h5>
        <br />
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Enter password" />
            </div>
             <BlackButton title="login" />
        </form>
        </>
    );
}
 
export default LoginForm;