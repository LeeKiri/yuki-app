import BlackButton from "../Button/BlackButton";
import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("clicked")
        const user = {email, password}        
        axios.post("/api/login", user)
        .then(res => {
            console.log(res);
            window.location = "/dashboard";
        })
    }
    return (  
        <>
        <form 
         onSubmit={handleSubmit}
        style={{
            width: "60%",
            margin: "auto",
            marginBottom: "300px"
        }}
        >
                   <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                 onChange={(e) => setEmail(e.target.value.trim())}
                 value={email}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                 onChange={(e) => setPassword(e.target.value.trim())}
                 value={password}
                style={{backgroundColor: "lightgray"}}
                type="text" className="form-control" placeholder="Enter password" />
            </div>
             <BlackButton title="login" />
        </form>
        </>
    );
}
 
export default LoginForm;