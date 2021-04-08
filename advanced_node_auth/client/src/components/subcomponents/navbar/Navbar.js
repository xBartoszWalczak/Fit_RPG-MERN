import { useState } from 'react';
import { 
    useHistory,
    Link
 } from "react-router-dom";

import NavbarElement from '../navbarelement/NavbarElement';
import Logo from '../../../images/icons/LOGOCLEAN.png';
import HomeIcon from '../../../images/icons/homeIcon.png';
import './Navbar.css'

const Navbar = (props) => {
    
    const [isAuth] = useState(props.isAuth || false);
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        history.push("/intro");
    }
    
    return(
        <div className="container">
            <Link to="/login"><img id="logo" src={Logo} alt="website logo"/></Link>

            <div className="navbarElementsContainer">
                {isAuth && <>
                    <NavbarElement name="s" icon={HomeIcon}/>
                    <NavbarElement name="i"/>
                    <NavbarElement name="e"/>
                    <NavbarElement name="m"/>
                    <NavbarElement name="a"/>
                    <button className="logbutton" onClick={handleLogout}>Logout</button>
                </>}

                {!isAuth && <>
                    <NavbarElement style="logbutton" name="Login" href="/login"/>
                    <NavbarElement style="logbutton" name="Register" href="/register"/>
                </>}

            </div>
        </div>
    );
}

export default Navbar;