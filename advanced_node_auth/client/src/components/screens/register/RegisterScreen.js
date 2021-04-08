import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterScreen = ({ history }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            history.push("/");
        }
    }, [history]);

    const registerHandler = async (e) => {
        e.preventDefault();
        
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        if(password !== confirmPassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Passwords do not match");
        }

        try{
            const { data } = await axios.post(
                "/api/auth/register",
                { username, email, password},
                config
            );
            localStorage.setItem("authToken", data.token);

            history.push("/");
        }catch(err){
            setError(err.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    return(
        <div className="formContainer">
            <div className="frame">
            <div className="blockLogin">
                <h1>Register</h1>
                {error && <span className="error-message">{error}</span>}
                
                <div className="Email">
                    
                    <input type="text" required id="name" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="Email">
                    
                    <input type="email" required id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="Password">
                    <input type="password" require id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="Password">
                    <input type="password" require id="confirmpassword" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>


                <button type="submit" className="loginButton" onClick={registerHandler}>Register</button>
                <span className="spander">Already have an account? <Link to="/login">Sing in now !<br></br><br></br></Link></span>
            </div>
            </div>
            </div>
    );
}

export default RegisterScreen;