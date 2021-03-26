import { useState } from 'react';
import './Navbar.css'
import Logo from '../../../images/icons/navbarlogo.png';
import { useHistory } from "react-router-dom";


const Navbar = (props) => {
    
    // Later it will be taken from redux/context

    const [isLoggedIn] = useState(props.isAuth || false);
    const history = useHistory();

    const handleLogin = () =>{
        history.push("/login");
    }

    const handleRegister = () => {
        history.push("/register");
    }

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }
    
    return(
        <div id="container">
                    <img id="logo" src={Logo} alt="website logo"/>

                    {!isLoggedIn && <button className="button" onClick={handleLogin}>Login</button>}
                    {!isLoggedIn && <button className="button" onClick={handleRegister}>Register</button>}
                    {isLoggedIn && <button className="button" onClick={handleLogout}>Logout</button>}

        </div>
    );
}

export default Navbar;