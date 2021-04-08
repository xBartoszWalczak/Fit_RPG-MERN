import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        document.title = "Login";
        
        if(localStorage.getItem("authToken")){
            history.push("/");
        }
    }, [history]);

    const loginHandler = async (e) => {
        
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        try{
            const { data } = await axios.post("/api/auth/login",
                { email, password},
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
                <h1>Login</h1>
                {error && <span className="error-message">{error}</span>}

                <div className="Email">
                    
                    <input type="email" required id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="Password">
                    <input type="password" require id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="loginButton" onClick={loginHandler}>Sign In</button>
                <span className="spander">Do not have an account? <Link to="/register">Register<br></br><br></br></Link></span>
                <span className="spander">Forgot password? <Link to="/forgotpassword">Remind now !</Link></span>
            </div>
            </div>
            </div>
    )
}

export default LoginScreen;