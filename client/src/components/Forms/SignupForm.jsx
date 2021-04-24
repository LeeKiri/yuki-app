import BlackButton from "../Button/BlackButton"
import { useState } from "react";

const SignupForm = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
        
    }
    return ( 
        <>
        <form 
        onSubmit={handleSubmit}
        style={{
            width: "60%",
            margin: "auto"
        }}
        >
        <h5>Sign-up now</h5>
        <br />
            <div className="mb-3">
                <label className="form-label" >Username *</label>
                <input
                onchange={(e) => setUsername(e.target.value)}
                value={username}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Jane Smith" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address *</label>
                <input 
                onchange={(e) => setEmail(e.target.value)}
                value={email}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="janesmith@gmail.com" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password * must be more than 6 characters</label>
                <input 
                onchange={(e) => setPassword(e.target.value)}
                value={password}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="password" required/>
            </div>
             <BlackButton title="submit" />
                <label style={{float: "right", verticalAlign: "center"}} className="form-label">* Required Fields</label>

        </form>
        </>
     );
}
 
export default SignupForm;