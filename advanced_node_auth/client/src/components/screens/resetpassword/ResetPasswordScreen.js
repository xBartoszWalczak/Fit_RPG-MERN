import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ResetPasswordScreen = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="formContainer">
    <div className="frame">
    <div className="blockLogin">
        <h1>Reset Password</h1>
        {error && <span className="error-message">{error}</span>}
        {success && (
          <span className="success-message">
            {success} <Link to="/login">Login</Link>
          </span>
        )}
        {!success && <>
        <div className="Email">
            
            <input type="password" required id="password" placeholder="New Password" autoComplete="true" value={password}onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="Password">
            <input type="password" require id="confirmpassword" placeholder="Confirm new password" autoComplete="true" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>

        <button type="submit" className="loginButton" onClick={resetPasswordHandler}>Reset Now</button>
        </>}
    </div>
    </div>
    </div>
  );
};

export default ResetPasswordScreen;