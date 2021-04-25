import BlackButton from "../Button/BlackButton"
import axios from "axios";
import { useState } from "react";

const SignupForm = ({setSignup}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, email, password, password2}
        axios.post("/api/signup", user)
        .then(res=> {
            console.log(res);
            setSignup(false)
        })
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
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Jane Smith" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address *</label>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="janesmith@gmail.com" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password * must be more than 6 characters</label>
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{backgroundColor: "lightgray"}}
                type="password" className="form-control" placeholder="password" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password *</label>
                <input 
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
                style={{backgroundColor: "lightgray"}}
                type="password" className="form-control" placeholder="password" required/>
            </div>
             <BlackButton title="submit" />
                <label style={{float: "right", verticalAlign: "center"}} className="form-label">* Required Fields</label>

        </form>
        </>
     );
}
 
export default SignupForm;