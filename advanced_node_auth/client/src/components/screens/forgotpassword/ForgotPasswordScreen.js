import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="formContainer">
    <div className="frame">
    <div className="blockLogin">
        <h1>Remind Password</h1>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <h4>Please enter the email address you register your account with. We
            will send you reset password confirmation to this email</h4>
        <div className="Email">
            
            <input type="email" required id="email" placeholder="Email" value={email}/>
        </div>

        <button type="submit" className="loginButton" onClick={forgotPasswordHandler}>Remind Now</button>
        <span className="spander">Do not have an account? <Link to="/register">Register<br></br><br></br></Link></span>
        <span className="spander">Already have an account? <Link to="/login">Sing in now !</Link></span>
    </div>
    </div>
    </div>
  );
};

export default ForgotPasswordScreen;